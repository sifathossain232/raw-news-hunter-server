const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 1000;

const categories = require('./Data/categories.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Raw hunter is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () =>{
    console.log(`Raw hunter API is running on port: ${port}`);
})