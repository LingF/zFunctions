
/**
 * 版本号比较
 * @param  {String} sVer        当前版本
 * @param  {String} sCompareVer 目标版本
 * @return {Boolean}
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
