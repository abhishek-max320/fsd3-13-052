localhost - URL
127.0.0.1 - IP address

ctrl+c - stop the server

## Node Package MAnager (NPM)
used to install , run , uninstall any program/project and package
-npm install <packageName>
-npm uninstall <packageName>

to use npm , the project must be npm project,
to create npm project we can use

-npm init -y
-it creates a package.json file automatically 
  package.json holds all the information realated to install
  package from npm
- it also create A folder node_modulus automatically
- node_modulus holds the package/libarary files
- generally we ignore node_modulus by .gitignore


Nodeman-it restart the server automatically when file changes,to install
> npm i nodeman -D

Note: -D flag will install this package as developer dependency
-to execute any program update the package.json filethen server as
<b>npm run dev</b>
-start-> it will execyte the app on deloyment
-dev-> it will start server in devlopment phase (only for developer)

-res: it will return contents(json/html/plain)to the use client
-req: it will retrive the information from client to the server
-server send also ststus codes to the client,that indicate

## Status Codes


-200-> ok
-201->created
-400->Bad Request
-402->unauthorized
-403->forbidden
-404->not found
-500->internal server error

## Content Type

-text/plian
-text/html
-apllication/json
-text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode



## Response as html content

1. res.end
   > - end("any html contest/tag")
2. html file
   > - read by createreadstream
   > - pipe with res object

3. html content
    send any htmml tags/content by using
    res.end('<any html tag>')

## JSON

> - server return data only not html content because html content will be retain by content devloper. the data is in json format 
> - json always stores data in key vslue pair in key value pair enclosed bhy {} braket aaray csn be stored by []baraket one pair of
> - curly braket will represent one object and its property will be seprated by , 

'''
{
  id:1,
  name:'mobile',
  price:25000,
  rating:4.5,
  review:200
}
'''