const express = require('express');
const educationCtrl = require('./educationDetails.controller');

const router = express.Router();

router.route('/education-details').post(educationCtrl.createEducationDetails);
router.route('/get-education-details').get(educationCtrl.getEducationDetails);

module.exports = router;