const express = require("express");
const experianceCtrl = require("./experianceDetails.controller"); 

const router = express.Router();

router.route('/create-experiance').post(experianceCtrl.createExperianceDetails);
router.route('/get-experiance').get(experianceCtrl.getExperianceDetails);

module.exports = router