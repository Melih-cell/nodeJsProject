// import { appendFile, writeFile } from 'fs';
// import fs from 'fs'
const fs = require('fs');

// fs.readFile('password.txt', 'utf-8', (err, data) => {
//     if (err) console.log(err)
//     console.log(data);
//     console.log('veriler alındı');
// })

// writeFile('main.txt', 'hello', 'utf-8', (err) => {
//     if(err) console.log(err);
//     console.log('oluşturulda')
// })


fs.rmdir('Klasör1', { recursive: true}, (err) => {
    if(err) console.log(err)
    console.log('Klasör oluşturuldu')
})