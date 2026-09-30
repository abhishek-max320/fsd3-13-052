# Express

1. create project folder
2. goto project and open terminal
3. execute `npm init -y`
4. install `npm i nodemon -D`
5. install `npm i express`
6. open package.json
   a.change `type:'module'`
   b.update script{
   "start":"node prg1.js",
   "dev":"nodemon prg1.js"
   }
7. create prg1.js in folder
8. add folderName/node_moduoles in .gitignore

# .send
  1. send method/function is used to rewart back contains to the client it may be html , json , htmlfile , clantext
  2. he can also add stutus code with status function it can be change the send function 


## Map
this function is used to iterate any array it must return new array.
'''
array.map((item)=>(){
   return
})

array.map((item)=>())
'''
we have to use explicit return keyword where as in syntax 2 their is not.
exclude number of properties from any json object.
const{p1,p2,...rest}=products;
log(rest);
to searh any item in json array we used findmethod it will return null on unsuccessful or object on successful
'''array.find((item)=>item.id===id);
'''