/**
 * 判断是否是否URL
 * @param {String} url
 * @returns {Boolean}
 */
export function isUrl(url) {
    return /(((^https?)|(^ftp)):\/\/((([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*)|(localhost|LOCALHOST|127.0.0.1))\/?)/i
        .test(url);
}

/**
 * 身份证校验
 * @param  {String} idCardNum 身份证号码
 * @returns {Boolean}
 */
export function isIdNo(idCardNum) {
    if (!idCardNum || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X|x)$/.test(idCardNum)) {
        return false;
    }
    return true;
}

/**
 * 判断是否手持设备
 * @returns {Boolean}
 */
export function getDeviceOS() {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者UC浏览器
    let isIOS = Boolean(u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)); //IOS终端
    if (isAndroid) {
        return 'android';
    } else if (isIOS) {
        return 'ios';

    }
}

/**
 * 字符串脱敏
 * @param  {String} str 脱敏字符串
 * @param  {Number} startNum 开始脱敏位置
 * @param  {Number} totalNum 脱敏字数
 * @returns {String}
 */
export function formatStr(str,startNum,totalNum) {
    if(str.length <= startNum + totalNum){
        throw Error('参数不合法');
    }
    var newStr = str.substring(0, startNum) + ' ******* ' + str.substring(startNum + totalNum, str.length);
    return newStr;
}

/**
* 查询当前日前几天的日期
* @param AddDayCount {int} 负数为前X天 正数为后X天
* @returns {String}
* @exaple
* getDate(-6)
*/
export function getDate(AddDayCount) { //日期查询
    let dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount + 1);
    let y = dd.getYear() + 1900;
    let m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1);
    let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate();
    return y + '-' + m + '-' + d;
}

/**
 * @Desc 获取手机号运营商
 * @param mobile 手机号码
 * @returns
 */
export function fmtMobService(mobile) {
    try {
        if (mobile === '') {
            return '';
        }
        if (/^(?:13[5-9]|147|148|15[0-27-9]|178|18[2-478]|198)\d{8}$|^(?:1440|170[35-6]|134[0-8])\d{7}$/.test(mobile)) {
            return '移动';
        }
        if (/^(?:13[0-2]|14[56]|15[56]|16[67]|17[56]|18[56])\d{8}|^(?:170[47-9]|171[0-9])\d{7}$/.test(mobile)) {
            return '联通';
        }
        if (/^(?:133|153|17[37]|18[019]|19[19])\d{8}$|(?:1349|1410|170[0-2]|1740)\d{7}$/.test(mobile)) {
            return '电信';
        }
        return '未知';
    } catch (e) {
        return '';
    }
}