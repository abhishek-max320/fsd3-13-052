import http from 'http';

const server = http.createServer((req, res) => {
    //req method -> GET,POST,PUT,DELETE,PATCH
    console.log("Method:", req.method);
    console.log("URL:", req.url)
    //browser can send only get request to the server
    //post/put/patch/delete ->> can be checked by api tester
   //api tester:- postman ,echoapi,thunder,client 
});