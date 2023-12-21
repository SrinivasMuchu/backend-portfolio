const mongoose = require('mongoose');

// create user schema
const educationSchema = new mongoose.Schema({
//    education : [{
    schoolName: {type: String},
    startDate: { type: Date},
    endDate: { type: Date},
    schoolPhoto: { type: String},
    cgpa: { type: String},
    location: { type: String},
    board: { type: String},
    branch: { type: String},
//    }] 
    
}, {
    timestamps: true,
});
    // create user mode
const educationModel = mongoose.model('education_details', educationSchema);
module.exports = { educationModel };
