const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello baby');
})

app.get('/about', (req, res) => {
    res.status(200).send('hello about');
})

app.get('/home', (req, res) => {
    res.status().send('hello home');
})

app.get('*', (req, res) => {
    res.status(400).send('hata');
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server Başlatıldı ${port}`)
});