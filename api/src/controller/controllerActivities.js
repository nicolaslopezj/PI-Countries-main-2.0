const {Country, Activity } = require("../db.js");
// const {v4: uuidv4 } = require("uuid");

const addActivity = async (req, res) => {
    const {name, dificulty, duration, season} = req.body
    // const actId = uuidv4()
    const validateActivity = await Activity.findOne({
        where: {
            name: name,
        }
    })

    if (!name || !dificulty || !duration || !season) {
        res.status(404).json("Please complete all fields.")
    }

    if (validateActivity) {
        res.status(404).json("This activity already exist.")
    } else {
        let newActivity = await Activity.create({
            // actId,
            name,
            dificulty,
            duration,
            season
        })

        await newActivity.setCountries(id)
        
        let match = await Country.findAll({
            where: {
                id: id
            },
            include: [Activity]
        })

        await newActivity.addCountries(match)
        res.status(200).send("Activity created succesfully.")
    }
}

const getActivities = async (req, res) => {
    let activity = await Activity.findAll()
    res.status(200).send(activity)
}

module.exports = {
    addActivity,
    getActivities,
}