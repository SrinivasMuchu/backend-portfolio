const mongoose = require('mongoose');

// create user schema
const skillSchema = new mongoose.Schema({
    
    // skills : [{
        skillPhoto: { type: String},
        skillName: {type: String},
        skillDescription: { type: [String]},
        projectDescription : { type : String},
        skillType : { type: String}
    // }],
   
}, {
    timestamps: true,
});
    // create user mode
const skillsModel = mongoose.model('skills_details', skillSchema);
module.exports = { skillsModel };
