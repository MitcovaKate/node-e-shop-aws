import http from 'node:http'
// import { loadTemplate } from './modules/template.mjs'
import { getProducts } from './modules/data.mjs'

import {render} from './modules/template.mjs'

const server = http.createServer(async (req,res) =>{
  res.setHeader("Content-type", "text/html" )
    // HW1: rewrite using switch
    let html

    switch (req.url) {
      case "/":
        // html = await loadTemplate("home.html")
        const products = await getProducts()

// rendering
let html
 html= await render('./pages/home.html',{products:'products'})
res.end(html)
// rendering

        // let list = ``

        // products.forEach(product => {
        //     list += `<h2>${product.name}<h2>`
        // })

        // html = html.replace("{% CATALOG %}", list);

         break;
      // case "/cart":
      //   html = `<h2>Cart details<h2>`;
      //   break;
      // case "/pay":
      //   html = `<h2>Payment<h2>`;
      //   break;
      default:
        html=`Oops, not found ;(`
        res.statusCode = 404
        
    }
    res.end(html)
})


server.listen("3000", "localhost")

