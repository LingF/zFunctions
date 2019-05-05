
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
 * @param {Number} time 
 * @param {String} cFormat - default: {y}-{m}-{d} {h}:{i}:{s}
 * @return {String}        
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  var date
  if (time === null) {
    return
  } else if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key]
    if (key === 'a') { 
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
