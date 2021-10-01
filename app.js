const express = require("express");
const axios = require('axios');

const app = express();

app.get('/posts', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => res.json(response.data))
        .catch(err => console.log(err));
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
});