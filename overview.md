# templating engines

template
    |
    v
 +---------+
|          |
|  engine  | <---------    data 
|          |    
|          |
+----------+
     |
     v
 rendered result


 user
   |
   V
   home.html(catalog)
         |
         +--Product 1
                |
                +----<a href="/buy/1">--->  /buy/xxxxx
                                              |
     +--Product 2                          order.html
             |
             +----<a href="/buy/2">--->  /buy/xxxxx|
   
     +--Product 3                                   
                                         