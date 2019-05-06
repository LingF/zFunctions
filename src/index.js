/**
 * b - Boolean
 * n - Number
 * o - Object
 *   a - Array
 *   d - Date
 *   f - Function
 *   r - RegExp
 * s - String
 * <null, undefined>
 * c - 可选
 */

/**
 * 版本号比较
 * @param  {String} sVer        当前版本
 * @param  {String} sCompareVer 目标版本
 * @return {Boolean}
 *            [example]
 *            - '3.2.0', '3.5.0'  -> true
 *            - '3.10.0', '3.5.0' -> true
 *            - '3.5.0', '3.5.5'  -> false
 */
export function compareVersion(sVer, sCompareVer) {
  if (typeof sVer !== 'string' || typeof sCompareVer !== 'string') {
    console.warn('版本号为字符串')
    return
  }
  var aVer = sVer.split('.'),
    aCompareVer = sCompareVer.split('.'),
    bCompareResults = aVer[0] - aCompareVer[0]
  return bCompareResults == 0 && aVer != aCompareVer ? compareVersion(aVer.splice(1).join('.'), aCompareVer.splice(1).join('.')) : bCompareResults >= 0
}

/**
 * 格式化时间
 * @param {Number} dTime 
 * @param {String} cFormat - default: {y}-{m}-{d} {h}:{i}:{s}
 * @return {String}        
 */
export function parseTime(dTime, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  var sFormat = cFormat && cFormat.toLocaleLowerCase() || '{y}-{m}-{d} {h}:{i}:{s}'
  var dValue
  if (dTime === null) {
    return
  } else if (typeof dTime === 'object') {
    dValue = dTime
  } else {
    if (('' + dTime).length === 10) dTime = parseInt(dTime) * 1000
    dValue = new Date(dTime)
  }
  var formatObj = {
    y: dValue.getFullYear(),
    m: dValue.getMonth() + 1,
    d: dValue.getDate(),
    h: dValue.getHours(),
    i: dValue.getMinutes(),
    s: dValue.getSeconds(),
    a: dValue.getDay()
  }
  var sTime = sFormat.replace(/{(y|m|d|h|i|s|a)+}/g, function (aResult, sKey) {
    var nValue = formatObj[sKey]
    if (sKey === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][nValue]
    }
    if (aResult.length > 0 && nValue < 10) {
      nValue = '0' + nValue
    }
    return nValue || 0
  })
  return sTime
}
