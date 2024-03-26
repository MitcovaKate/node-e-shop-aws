 Promise <pending>
             ^
             |
            return
             |
fileExists(path) <--------+
              |           |
              v           |
        stat(path)        |
        |                 |
        |                 |
        v                 |        
    Promise <pending>     |
            |             |
            |             |
            |             |
            |  Promise {true}
            |    ^
            |   return
            v   |
         then(...) <--------+
               |            |
               |          return
               v            |
              stats => true +