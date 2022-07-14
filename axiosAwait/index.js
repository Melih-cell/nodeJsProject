
const fetchData = (data) => {
    return new Promise((resolve, reject) => {
        if(data) {
            resolve('Görev Başarılı')
        } else {
            reject('Başarısız')
        }
    })
}

fetchData(true)
 .then(response => console.log(response))


async function jean() {
    const response = await fetchData();
    return response;
}

jean()

module.export = {
}

export {
    jean,
    fetchData
}