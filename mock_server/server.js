const Koa = require('koa')
const app = new Koa()
const apis = require('./apis')

const host = '127.0.0.1';
const port = 5555

app
 .use(apis.routes())
 .use(apis.allowedMethods());

app.listen(port, host)
console.log(`mock server running at ${host}:${port}`);