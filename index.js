const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const personDetails = require('./PersonalDetails/personalDetails.route');
const skillsDetails = require('./SkillsDetails/skillsDetails.route');
const educationDetails = require('./EducationDetails/educationDetails.router');
const experianceDetails = require('./ExperianceDetails/experianceDetails.route');
const projectDetails = require('./ProjectDetails/projectDetails.router');
const getInTouch = require('./GetInTouch/getInTouch.route')
require("dotenv").config()


const port = process.env.PORT


const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use("/user", personDetails)
app.use("/skills", skillsDetails)
app.use("/education", educationDetails)
app.use("/experiance", experianceDetails)
app.use("/projects", projectDetails)
app.use("/contact", getInTouch)
app.get("/", (req,res) => {
    res.send({
        message: "API is working now"
    })
})

app.listen(port, async()=>{
    try{
        await connection
        console.log("database connected")
    }catch (error){
        console.log(`Here is the error ${error}`)
    }

    console.log("server is running on the port number", port)
})