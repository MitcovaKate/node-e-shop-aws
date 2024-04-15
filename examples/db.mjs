import postgres from 'postgres';
const sql=postgres('postgres://postgres:kate@localhost:10000/e_shop_db',{})
const products = await sql`SELECT *FROM products`;
console.log(products)