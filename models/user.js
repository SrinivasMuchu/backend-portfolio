const mongoose = require('mongoose');

// create user schema
const memberSchema = new mongoose.Schema({
    fullName: { type: String},
    email: { type: String },
    photo: { type: String},
    phoneNumber:{ type: String},
    linkedinName:{ type: String},
    githubName:{ type: String},
    is_admin: { type: Boolean },
    designations:{ type: [String]},
    aboutMe : { type: String},
    linkedin: { type: String},
    github: { type: String}, 
    resume: { type: String},
}, {
    timestamps: true,
});
    // create user mode
const memberModel = mongoose.model('personal_details', memberSchema);
module.exports = { memberModel };
