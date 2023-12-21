const mongoose = require("mongoose");

// need to calculate experiance by start and end date
const experianceSchema = new mongoose.Schema(
  {
    // experiance: [
    //   {
        companyName: { type: String },
        companyLogo : { type: String},
        companyDescription: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        present: { type: Boolean },
        role: { type: String },
        location: { type: String },
        roleDescription: { type: String },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);
// create user mode
const experianceModel = mongoose.model("experiance_details", experianceSchema);
module.exports = { experianceModel };
