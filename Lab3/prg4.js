import http from 'http';
import { review } from "./data.js";

const server = http.createServer((req, res) => {

    const products = {
        id: 1,
        name: 'Mobile',
        price: 40000,
        rating: 4.7,
        review: 225
    };

    if (req.url === "/api/products") {
        res.end(JSON.stringify(products));
    } 
    else if (req.url === "/api/reviws") {
        res.end(JSON.stringify(review));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, () => {
    console.log('prg4 is running');
});