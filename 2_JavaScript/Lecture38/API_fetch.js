console.log("fetch.js")
fetch('https://jsonplaceholder.typicode.com/users')
.then(Response => Response.json())
.then(json => console.log(json))