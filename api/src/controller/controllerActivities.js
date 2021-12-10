const {Country, Activity } = require("../db.js");
const {v4: uuidv4 } = require("uuid");

const addActivity = async (req, res) => {
    // try {
    const {name, difficulty, duration, season, cId} = req.body
    const validateActivity = await Activity.findOne({
        where: {
            name: name,
        }
    })
    
    if (!name || !difficulty || !duration || !season || !cId) {
        res.status(404).json("Please complete all fields.")
    }
    
    if (validateActivity) {
        res.status(404).json("This activity already exist.")
    } else {
        console.log(req.body)
        const id = uuidv4()
        const newActivity = await Activity.create({
            id,
            name,
            difficulty,
            duration,
            season
        })
        
        
        await newActivity.setCountries(cId)
        
        let match = await Country.findAll({
            where: {
                id: cId
            },
            include: [Activity]
        })
        
        await newActivity.addCountries(match)
        res.status(200).send(match)
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