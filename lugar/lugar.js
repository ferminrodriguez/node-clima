const axios = require('axios');

//console.log(encodeUrl);
const getLugarLatLng = async( dir ) => {

const encodeUrl=encodeURI(dir);
const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
            headers: {'x-rapidapi-key': '98ef62b950mshaadbfcf06404767p12e4f2jsn704643914321'}});

            const resp = await instance.get();
            if (resp.data.Results.lenght===0){
                throw new Error(`Data no encontrada para ${dir}`);
            }
            const data = resp.data.Results[0];
            const direccion =data.name;
            const lat = data.lat;
            const lng = data.lon;  
            
            return  {
                direccion,
                lat,
                lng
            }
            }
            
module.exports = {
    getLugarLatLng
}