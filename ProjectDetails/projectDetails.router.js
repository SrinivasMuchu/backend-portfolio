const express = require("express");
const projectCtrl = require("./projectDetails.controller");

const router = express.Router();

router.route('/create-project-details').post(projectCtrl.createProjectDetails);
router.route('/get-project-details').get(projectCtrl.getProjectDetails);

module.exports = router

