import http from 'node:http'
import { loadTemplate } from './modules/template.mjs'
import { getProducts } from './modules/data.mjs'


const server = http.createServer(async (req,res) =>{
    // HW1: rewrite using switch
    let html

    switch (req.url) {
      case "/":
        html = await loadTemplate("home.html")
        const products = await getProducts()

        let list = ``

        products.forEach(product => {
            list += `<h2>${product.name}<h2>`
        })

        html = html.replace("{% CATALOG %}", list);

        break;
      case "/cart":
        html = `<h2>Cart details<h2>`;
        break;
      case "/pay":
        html = `<h2>Payment<h2>`;
        break;
      default:
        html = `Oops, not found ;(`;
        res.statusCode = 404;
    }
        
                                // MIME type
    res.setHeader("Content-type", "text/html")
    res.end(html)
})


server.listen("3000", "localhost")

