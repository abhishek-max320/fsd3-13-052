# FS (File System) Node.js Module
it direct connect with client Os rather than Browser

## Major tasks of the fs module

- Reading and writing files
  - readFile()
  - appendFile()
- File metadata and information
  - stat()
  - lstat()
  - fstat()
- Watching for changes
  - watch()
  - watchFile()
- Streaming large files
  - createReadStream()
  - createWriteStream()
- File operations
  - rename()
  - truncate()
  - unlink()
  - link()
  - symlink()

  ## CRUD Operation

  create/insert, Read/Retrive, Update,Delete
  each item (id,name,price,qty)

  features:
     1-add to cart
     2-show cart
     3-remove from cart
     4-update quantity from cart
     5-checkout
NOTE: all items will be stored in hdd, so after termination of program we can retrieve cart details. 
## Required File

  1-crud.js -it contains all the methods and entry point
  2-product.json - it contains the product details imn array form     