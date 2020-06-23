import Taro,{ Component } from "@tarojs/taro";
import { ISMOCK, MAINHOST ,HTTP_STATUS, HTTP_ERROR} from "../config";
// import { commonParame,requestConfig } from "../config/requestConfig";


/**
 *  检查http状态值
 */

 function checkHttpStatus(response: API.Response, resolve, reject) {
     console.log('检查http状态值--',response);
     
     if (response.statusCode >= 200 && response.statusCode < 300) {
        // console.log("报错了---",response);

        if ((response.data.msg)) {
            if ((response.data.msg).indexOf('token已经失效')> -1) {
                // 删除用户信息
                Taro.removeStorageSync('authorize')
                Taro.removeStorageSync('user')
            }
            //提示
            Taro.showToast({
                title : response.data.msg,
                icon : 'none' ,
                duration: 3000,
                mask : true
            })
            resolve(response.data)
        }else{
            resolve(response.data)

        }
     } else {
         const message = HTTP_ERROR[response.statusCode] || `ERROR CODE : ${response.statusCode}`
        // console.log(message,"报错了---",response);
        
        //  response.data.statusCode = JSON.parse(response.statusCode)
        //  response.data.error = message
        //提示
        Taro.showToast({
            title : message,
            icon : 'none' ,
            duration: 3000,
            mask : true
        })
         reject(response.data)
     }
 }

//  存储token
 function setToken(response: API.Response) {
    //  console.log('存储token===>>>>',response);
     
     if(response.header && response.header.token){
        Taro.setStorageSync('token', response.header.token)
     }
     if (response.header && response.header['Set-Token']) {
        Taro.setStorageSync('token', response.header['Set-Token'])
      }
      return response
 }


export default {
    request(options: any, method?: string){
        const { url } = options
        return new Promise((resolve,reject)=>{
            // console.log(method,'接口请求==',options);
            
            Taro.request({
                ...options,
                method:method || 'POST',
                url: `${MAINHOST}${url}`,
                header:{
                     token: Taro.getStorageSync('user')._token || '',
                     // 测试
                    //  token: 'tokenString',
                    ...options.header
                }
            }).then(setToken) // TODO: 先用user或者authorize的token
                .then((res)=>{
                    checkHttpStatus(res, resolve, reject)
                })
        })
    },
    get(options:any){
        return this.request({
            ...options
        })
    },
    post(options:any){
        return this.request({
            ...options,
        },'POST')
    },
    put(options: any) {
        return this.request({
          ...options,
          data: options.data
        }, 'PUT')
    },
    delete(options: any) {
        return this.request({
            ...options,
            data: options.data
        }, 'DELETE')
    }
}

