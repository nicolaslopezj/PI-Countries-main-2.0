const { Country, Activity } = require('../db.js');
const axios = require('axios');
const { loadDb } = require('../loadDb');

const getDbInfo = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllCountries = async () => {
  const dbInfo = await getDbInfo();
  if (!dbInfo.length) {
    await loadDb();
    return await getDbInfo();
  }
  return dbInfo;
};

const getCountries = async (req, res) => {
  let countries = await getAllCountries(); //Deposita todo los datos de la db;
  try {
    countries.length
      ? res.status(200).json(countries)
      : res.status(404).send('Not found... ):');
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCountryById = async (req, res) => {
  const id = req.params;
  let countries = await getAllCountries(); //Deposita todo los datos de la db;
  if (id) {
    // try {
    let country = countries.filter((fl) => fl.id == id);
    country.length
      ? res.status(200).json(country)
      : res.status(404).send('Not found... ):');
    // } catch (error) {
    //     res.status(500).send(error);
    //   }
  }
  // res.status(404).send("Not found... ):");
};

// const getCountryById = async (req, res) => {
//   try {
//     const { idPais } = req.params;
//     console.log("idPais--", idPais)
//     if ( idPais ) {
//       const result = await Country.findOne({ //Guarda la coincidencia que haya mediante params y si tiene actividad, también la devuelve;
//         where: { id: idPais.toUpperCase() },
//         include: [Activity]
//       });
//       if (!result) {
//         return res.status(404).send("ID Not found into our database");
//       }
//       await res.json(result);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(404).send("Server crashed");
//   };
// };

const getCountryByName = async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      let countries = await getAllCountries();
      let country = countries.filter((fl) =>
        fl.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log('countries', country);
      // console.log(res)
      // console.log("res", res)
      country.length
        ? res.status(200).json(country)
        : res.status(404).send('Not found... ):');
    } catch (error) {
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
  }
};

module.exports = {
  getCountries,
  getCountryById,
  getCountryByName,
};
