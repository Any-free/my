# 常用工具函数 [![lerna](https://img.shields.io/badge/packages-lerna-cc00ff.svg)]()
## 安装
```shell
npm install @any_free/utils_fn -S
```
## 使用
**isUrl**
 * 判断是否是否URL
 * @param {String} url
 * @returns {Boolean}
 ```
import {isUrl} from '@any_free/utils_fn'
isUrl(url);
 ```

**isCardNum**
 * 身份证校验
 * @param  {String} idCardNum 身份证号码
 * @returns {Boolean}
 ```
import {isCardNum} from '@any_free/utils_fn'
isCardNum(idCardNum);
 ```

**getDeviceOS**
 * 判断是否手持设备
 * @returns {Boolean}
 ```
import {getDeviceOS} from '@any_free/utils_fn'
getDeviceOS();
 ```

 **formatStr**
 * 字符串脱敏
 * @param  {String} str 脱敏字符串
 * @param  {Number} startNum 开始脱敏位置
 * @param  {Number} totalNum 脱敏字数
 * @returns {String}
 ```
import {formatStr} from '@any_free/utils_fn'
formatStr(str,startNum,totalNum);
 ```

 **getDate**
* 查询当前日前几天的日期
* @param AddDayCount {Number} 负数为前X天 正数为后X天
* @returns {String}
 ```
import {getDate} from '@any_free/utils_fn'
getDate(AddDayCount);
 ```

 **fmtMobService**
 * @Desc 获取手机号运营商
 * @param mobile 手机号码
 * @returns '移动'||'联通'||'电信'||''未知
 ```
import {fmtMobService} from '@any_free/utils_fn'
fmtMobService(mobile);
 ```