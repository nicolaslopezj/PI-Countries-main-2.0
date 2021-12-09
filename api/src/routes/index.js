const { Router } = require('express');
const countriesRoutes = require('./Country');
const activitiesRoutes = require('./Activity');
const router = Router();

router.use('/', countriesRoutes);
router.use('/', activitiesRoutes);

module.exports = router;

// _______________________________________________________________________________________________________________

// const { Router } = require('express');
// const axios = require("axios");
// const { Country, Activity } = require("../db.js");
// const { v4: uuidv4 } = require("uuid");
// // const Activity = require('../models/Activity.js');

// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');


// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// const getApiInfo = async () => {
//     const apiUrl = await axios.get(
//       `https://restcountries.com/v3/all`
//     );
//     const apiInfo = await apiUrl.data.map((mp) => {
//       return {
//         name: mp.name.common,
//         id: mp.cca3,
//         img: mp.flags.find((flag) => flag.includes("png")),
//         continent: mp.region,
//         capital: mp.capital,
//         subregion: mp.subregion,
//         area: mp.area,
//         population: mp.population,
//       };
//     });
//     return apiInfo;
//   };

//   const getDbInfo = async () => {
//     return await Country.findAll({
//       include: {
//         model: Activity,
//         attributes: ["name"],
//         through: {
//           attributes: [],
//         },
//       },
//     });
//   };
  
//   const getAllCountries = async () => {
//     const apiInfo = await getApiInfo();
//     const dbInfo = await getDbInfo();
//     const infoTotal = apiInfo.concat(dbInfo);
//     return infoTotal;
//   };


// router.get("/countries/:id", async (req, res) => {
//   const idPais = req.params.id;
//   let countries = await getAllCountries();//Deposita todo los datos de la db;
//   if (idPais) {
//     try {
//       let country = await countries.filter((fl) => fl.id == idPais.toUpperCase());
//       country.length
//         ? res.status(200).json(country)
//         : res.status(404).send("Not found... ):");
//       } catch (error) {
//         res.status(500).send(error);
//       }
//     }
//   });

// router.get("/countries", async (req, res) => {
//     const {name} = req.query;
//     if(name){
//       try {
//       let countries = await getAllCountries();
//       let country = await countries.filter((fl) => fl.name == name);
//       country.length
//         ? res.status(200).json(country)
//         : res.status(404).send("Not found... ):");
//     }
//     catch (error) {
//       console.log(error);
//       res.status(500).send(error);
//     }
//     try {
//       let countries = await getAllCountries();
//       countries.length
//         ? res.status(200).json(countries)
//         : res.status(404).send("Not found... ):");
//     }
//     catch (error) {
//       console.log(error);
//       res.status(500).send(error);
//     }
//   }});

// // router.get("/countries", async (req, res) => {
// //   const { name } = req.query;
// //   if ( name ) {
// //     try {
// //       const result = await Country.findAll({ //Comprueba si hay match con lo recibido del query;
// //         where: { name: name },
// //         include: [Activity]
// //       });
// //       if ( !result ) {
// //         return res.status(404).send("Country search does not match."); //En caso de que no haya coincidencia;
// //       };
// //       return await res.json(result); //En caso de sí haber;
// //     } catch (err) {
// //       console.log(err);
// //       res.status(500).send("Server crashed.");
// //     };
// //   };
// //   try {
// //     let countriesDB = await Country.findAll(); //Deposita todo los datos de la db;
// //     let countriesFilter = countriesDB.slice(0, 10); //Muestra los primeros diez;
// //     res.json(countriesFilter);
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).send("Server crashed.");
// //   };
// // });

// router.post('/activity', async(req, res, next) => {
//     try {
//       let { name, dificulty, duration, season } = req.body;
//       let newActivity = await Activity.create({
//         name,
//         dificulty,
//         duration,
//         season
//       })
//     console.log(newActivity)
//     res.status(200).json(newActivity)
//     }catch(error){
//       res.status(500).send(error) 
//     }
// })


// module.exports = router;
