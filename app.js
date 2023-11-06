const { log } = require('console');
const http = require('http');

const server = http.createServer((req,res)=>{
// console.log(req)
if(req.url === '/'){
  res.end('Welcome gays')
}
if(req.url === '/about'){
  res.end('Here is our shot his')
}
res.end(`<h1>TERI MAA!</h1>
<p>Nahi dikh rha</p>
<a href="/"> ghar jaa wapis</a>`)
res.write('Welcome to our home page you are gay')
res.end()
})

server.listen(5000)