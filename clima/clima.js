const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=d4d5a554bb7699e5c6a381e9e3a5a2c9`);

    if (resp.data.cod === '400') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}