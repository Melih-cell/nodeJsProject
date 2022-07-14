const fs = require("fs")


fs.writeFile('data.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('Dosya oluşturuldu')
})

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
    console.log('Dosya okundu')
})

fs.appendFile('data.json', '{"name": "new Employee 1 Name", "salary": 3000}', (err) => {
    if (err) console.log(err)
    console.log('Veri güncellendi')
})

fs.unlink('data.json', () => {
    console.log('Dosya silindi')
})