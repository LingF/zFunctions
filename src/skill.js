/**
 * URLSearchParams
 */
var paramsString = 'q=URLUtils.searchParams&topic=api&topic=url' // location.search
var searchParams = new URLSearchParams(paramsString)
// for...of
for (let p of searchParams) {
  console.log(p)
}
// has
searchParams.has('topic') === true
// get
searchParams.get('topic') === 'api'
// getAll
searchParams.getAll('topic') // ['api', 'url']
// append、toString
searchParams.append('topic', 'web')
searchParams.toString() // 'q=URLUtils.searchParams&topic=api&topic=url&topic=web'
// set
searchParams.set('topic', 'dev')
searchParams.toString() // 'q=URLUtils.searchParams&topic=dev'
// delete
searchParams.delete('topic')
searchParams.toString() // 'q=URLUtils.searchParams'
