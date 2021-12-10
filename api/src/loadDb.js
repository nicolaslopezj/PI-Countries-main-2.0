const axios = require('axios');
const { Country } = require('./db');

const getApiInfo = async () => {
  const apiUrl = await axios.get('https://restcountries.com/v3/all');
  const apiInfo = await apiUrl.data.map((mp) => {
    return {
      name: mp.name.common,
      cca3: mp.cca3,
      id: mp.cca3,
      img: mp.flags[0],
      continent: mp.continents[0],
      capital: mp.capital ? mp.capital[0] : 'No Capital',
      subregion: mp.subregion,
      area: mp.area,
      population: mp.population,
    };
  });
  // console.log(apiInfo);
  return apiInfo;
};

async function loadDb() {
  try {
    {
      const countries = await getApiInfo();
      await Promise.all(
        countries.map(async (e) => {
          console.log(e);
          await Country.create(e);
        })
      );
    }
    console.log('DB loaded');
  } catch (error) {
    console.log(error);
  }
}

module.exports = { loadDb };
