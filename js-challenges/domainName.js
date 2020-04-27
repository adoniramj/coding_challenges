function domainName(url) {
    const filters = ['https://www.', 'http://www.', 'https://', 'http://' , 'www.']
    let filter = ''
    for (let index = 0; index < filters.length; index++) {
        //let n = url.includes(filters[index])
        if ( url.includes(filters[index])) {
            filter = filters[index]
            break;
        } 
     }
    url = url.slice(filter.length)
    n = url.indexOf('.')
    url = url.slice(0,n)
    return url
}

url = "https://www.8i6grzp4v3fa6l.info/img/"
const result = domainName(url)
console.log(result)

function domainName2(url){
    return  url.replace('http://', '')
               .replace('https://', '')
               .replace('www.', '')
               .split('.')[0];
  }