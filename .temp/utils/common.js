/**
 * 共用函数
*/
export const repeat = (str = '0', times) => new Array(times + 1).join(str);
// 时间前面 +0 
export const pad = (num, maxLength = 2) => repeat('0', maxLength - num.toString().length) + num;
// 全局的公共变量
export let globalData = {
  extraData: []
};
// 时间格式装换函数
export const formatTime = time => {
  `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}.${pad(time.getMilliseconds(), 3)}`;
};
/**
 * 判断参数是否为空
 * @author Drl
 * @param {[type]} keys [description]
 */
export const IsEmpty = keys => {
  if (typeof keys === "string") {
    keys = keys.replace(/(^\s*)|(\s*$)/g, "");
    if (keys == "" || keys == null || keys == 'null' || keys == undefined || keys == 'undefined') {
      return true;
    } else {
      return false;
    }
  } else if (typeof keys === 'undefined') {
    return true;
  } else {
    if (typeof keys == "object") {
      for (let i in keys) {
        return false;
      }
      return true;
    }
  }
};