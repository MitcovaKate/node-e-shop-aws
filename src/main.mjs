import http from 'node:http'
import querystring from 'node:querystring'
import { getProducts,getProductByID, saveOrder } from './modules/data.mjs'

import {render} from './modules/template.mjs'
import { readFile } from 'node:fs'
import {v4 as uuid} from uuid
const server = http.createServer(async (req,res) =>{
  res.setHeader("Content-type", "text/html" )
  
// rendering
let html
if(req.url=== "/"){
const products = await getProducts()
 html= await render('./pages/home.html',{products:'products'})
}
else if(req.url.startsWith("/images")){
html = await readFile(`.${req.url}`)
}
else if(req.url.startsWith("/buy")){
  let id=parseInt(req.url.split('/').pop())
  let product = await getProductByID(id)
  html= await render("./pages/order.html",{product:'product'})
} else if(req.url.startsWith("/pay")){
let parametrs=req.url.split("?")
let data= querystring.parse(parametrs[1])
data.id=uuid()
data.payed=false
await saveOrder(data);
html= 'Order saved'
}
  else {
        html=`Oops, not found ;(`
        res.statusCode = 404
        
    }
    res.end(html)
})


server.listen("3000", "localhost")

