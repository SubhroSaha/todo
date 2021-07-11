const express = require('express');
const bodyParser = require('body-parser');

const api = express();

// api.use((req, res, next) => {
//     console.log('This is a middleware running.');
//     next();
// });

api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.listen(3000, () => {
    console.log('API up an running on http://localhost:3000/');
});

// api.get('/', (req, res) => {
//     // console.log(req);
//     res.send("Hello World");
// })

api.post('/add' ,(req, res) => {
    console.log(req.body);
    res.send('It works');
});