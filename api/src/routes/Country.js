const { Router } = require("express");
const router = Router();
const {
  getCountries,
  getCountryByName,
  getCountryById,
} = require("../controller/controllerCountries");

router.get("/", getCountries);
router.get("/countries", getCountryByName);
router.get("/countries/:id", getCountryById);

module.exports = router;
