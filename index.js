var url = require('url')
var fixable = /^.[\\\/]+/

module.exports = pathParseAsUrl
function pathParseAsUrl (file) {
  if (!file) {
    return null
  }
  
  // home directory
  if (/^[\\\/]+$/.test(file)) {
    return null
  }
  
  // current directory "./" or "."
  if (/^\.[\/\\]*$/.test(file)) {
    return null
  }
  
  // if "./" or ".\\" is starting
  // we can just fix it by chopping that off
  if (fixable.test(file)) {
    file = file.replace(fixable, '')
  } 
  // we can't easily fix relative and absolute paths
  else if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/.test(file)) {
    return null
  }
  
  // path is not relative/absolute, just treat as usual
  return url.parse(file).path
}
