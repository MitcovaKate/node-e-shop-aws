-- Active: 1713215218300@@127.0.0.1@10000@e_shop_db
-- data definition layer
CREATE TABLE products (e
    id int PRIMARY KEY,
    name varchar(100) not null,
    price_amount int not null,
    price_currency varchar(4) not null,    
    image varchar(100)
);
CREATE TABLE orders (
    id uuid PRIMARY KEY,
    productId int not null,
    fullName varchar(50) not null,
    emailAddress varchar(100) not null,
    phoneNumber varchar(20),  
    payed boolean DEFAULT false,    

    FOREIGN KEY (productId) REFERENCES products(id)
);