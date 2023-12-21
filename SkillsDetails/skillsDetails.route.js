const express = require('express');
const skillsCtrl = require('./skillsDetails.controller');

const router = express.Router();

router.route('/skills-details').post(skillsCtrl.skillsDetails);
router.route('/get-skills').get(skillsCtrl.getSkillDetails);

module.exports = router;