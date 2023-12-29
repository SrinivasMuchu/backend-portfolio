const mongoose = require("mongoose");

// create user schema
const projectSchema = new mongoose.Schema(
  {
    // projects: [
      // {
        projectName: { type: String },
        projectDescription: { type: [String] },
        projectVideo : { type: String},
        projectShortDescription : {type: String}, 
        projectPhoto: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        techStack: { type: [String] },
        demoLink: { type: String },
        repoLink: { type: String },
        present: { type: Boolean },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);
// create user mode
const projectModel = mongoose.model("project_details", projectSchema);
module.exports = { projectModel };
