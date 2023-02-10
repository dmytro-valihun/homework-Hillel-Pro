const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categories = require('./categories.json');
const products = require('./products.json')

const orderArr = [];

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = 5000;

app.get('/api/categories', function(request, response) {
    response.send(200, categories);
});

app.get('/api/products/:category', function(request, response) {
    const category = request.params.category;
    const productsByCategory = products[category] || [];
    response.send(200, JSON.stringify(productsByCategory));
});

app.post('/api/order', function(request, response) {
    const order = request.body;
    orderArr.push(order);
    response.send('ok');
    console.log(orderArr);
});

app.listen(PORT);