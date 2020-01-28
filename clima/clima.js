const axios = require('axios');

const getClima = async (lat,lng) =>{
const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ad6ebd73ad8b2d93b0bbec2ad4c2a11f&units=metric`)
return resp.data.main.temp;
}
module.exports = {
    getClima
}