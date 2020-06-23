import index from "../pages/index/config"; // index的接口
/**
 * 请求公共参数
*/
export const commonParame = {};
/**
 * 请求的映射文件
*/
export const requestConfig = {
  loginUrl: '/api/user/wechat-auth',
  ...index
};