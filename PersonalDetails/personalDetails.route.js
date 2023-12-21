const express = require('express');
const personCtrl = require('./personalDetails.controller');

const router = express.Router();

router.route('/person-details').post(personCtrl.memberDetails);
router.route('/get-person-details').get(personCtrl.getUserDetails);

module.exports = router;