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

## Content Tyoe 

-text/plian
-text/html
-apllication/json
-text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode