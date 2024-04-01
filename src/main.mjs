import http from 'node:http'
import { getProducts,getProductByID } from './modules/data.mjs'

import {render} from './modules/template.mjs'
import { readFile } from 'node:fs'

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
}
  else {
        html=`Oops, not found ;(`
        res.statusCode = 404
        
    }
    res.end(html)
})


server.listen("3000", "localhost")

