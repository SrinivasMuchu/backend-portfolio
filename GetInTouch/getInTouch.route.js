const express = require("express");
const contactCtrl = require('./getInTouch.controller');

const router = express.Router();

router.route('/create-contact-details').post(contactCtrl.createGetInTouch);

module.exports = router;