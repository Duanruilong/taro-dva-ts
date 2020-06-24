import Taro, { removeStorageSync as _removeStorageSync, showToast as _showToast, setStorageSync as _setStorageSync, request as _request, getStorageSync as _getStorageSync } from "@tarojs/taro-h5";
import { MAINHOST, HTTP_ERROR } from "../config/index";
// import { commonParame,requestConfig } from "../config/requestConfig";
/**
 *  检查http状态值
 */
function checkHttpStatus(response, resolve, reject) {
  console.log('检查http状态值--', response);
  if (response.statusCode >= 200 && response.statusCode < 300) {
    // console.log("报错了---",response);
    if (response.data.msg) {
      if (response.data.msg.indexOf('token已经失效') > -1) {
        // 删除用户信息
        _removeStorageSync('authorize');
        _removeStorageSync('user');
      }
      //提示
      _showToast({
        title: response.data.msg,
        icon: 'none',
        duration: 3000,
        mask: true
      });
      resolve(response.data);
    } else {
      resolve(response.data);
    }
  } else {
    const message = HTTP_ERROR[response.statusCode] || `ERROR CODE : ${response.statusCode}`;
    // console.log(message,"报错了---",response);
    //  response.data.statusCode = JSON.parse(response.statusCode)
    //  response.data.error = message
    //提示
    _showToast({
      title: message,
      icon: 'none',
      duration: 3000,
      mask: true
    });
    reject(response.data);
  }
}
//  存储token
function setToken(response) {
  //  console.log('存储token===>>>>',response);
  if (response.header && response.header.token) {
    _setStorageSync('token', response.header.token);
  }
  if (response.header && response.header['Set-Token']) {
    _setStorageSync('token', response.header['Set-Token']);
  }
  return response;
}
export default {
  request(options, method) {
    const { url } = options;
    return new Promise((resolve, reject) => {
      console.log(method, '接口请求==', options);
      _request({
        ...options,
        method: method || 'POST',
        url: `${MAINHOST}${url}`,
        header: {
          token: _getStorageSync('user')._token || '',
          // 测试
          //  token: 'tokenString',
          ...options.header
        }
      }).then(setToken) // TODO: 先用user或者authorize的token
      .then(res => {
        checkHttpStatus(res, resolve, reject);
      });
    });
  },
  get(options) {
    return this.request({
      ...options
    });
  },
  post(options) {
    return this.request({
      ...options
    }, 'POST');
  },
  put(options) {
    return this.request({
      ...options,
      data: options.data
    }, 'PUT');
  },
  delete(options) {
    return this.request({
      ...options,
      data: options.data
    }, 'DELETE');
  }
};