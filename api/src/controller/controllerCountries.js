const { Country, Activity } = require("../db.js");
const axios = require("axios");

const getApiInfo = async () => {
    const apiUrl = await axios.get(
      "https://restcountries.com/v3/all"
    );
    const apiInfo = await apiUrl.data.map((mp) => {
      return {
        name: mp.name.common,
        id: mp.cca3,
        img: mp.flags[0],
        continent: mp.continents,
        capital: mp.capital,
        subregion: mp.subregion,
        area: mp.area,
        population: mp.population,
      };
    });
    // console.log(apiInfo);
    return apiInfo;
  };

const getDbInfo = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllCountries = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  // console.log("infoTotal", infoTotal);
  // debugger
  return infoTotal;
};

const getCountries = async (req, res) => {

  let countries = await getAllCountries();//Deposita todo los datos de la db;
    try {
      
      countries.length
        ? res.status(200).json(countries)
        : res.status(404).send("Not found... ):");
      } catch (error) {
        res.status(500).send(error);
      }
    }

const getCountryById = async (req, res) => {
  const idPais = req.params.id;
  let countries = await getAllCountries();//Deposita todo los datos de la db;
  if (idPais) {
    try {
      let country = await countries.filter((fl) => fl.id == idPais.toUpperCase());
      country.length
        ? res.status(200).json(country)
        : res.status(404).send("Not found... ):");
      } catch (error) {
        res.status(500).send(error);
      }
    }
  };

const getCountryByName = async (req, res) => {
  const {name} = req.query;
  if(name){
    try {
    let countries = await getAllCountries();
    let country = countries.filter((fl) => fl.name.toLowerCase() == name.toLowerCase());
    console.log("countries", country)
    // console.log(res)
    // console.log("res", res)
    country.length
    ? res.status(200).json(country)
    : res.status(404).send("Not found... ):");
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  // try {
  //   let countries = await getAllCountries();
  //   if (countries.length)
  //   return res.json(countries)
  //     // : res.status(404).send("Not found... ):");
  // }
  // catch (error) {
  //   console.log(error);
  //   res.send("error");
  // }
}};

module.exports = {
  getCountries,
  getCountryById,
  getCountryByName,
};


