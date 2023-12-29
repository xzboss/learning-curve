const query = '?id=999&name=xz&age=18'
const obj = {}
query.replace(/([^&?]+)=([^&]*)/gi,(match, $1, $2, origin)=>{
    obj[$1] = $2
})
console.log(obj)
