const express = require('express');
const { HomePageResponse,AboutPageResponse, ContactPageResponse } = require('../Controller/HomePageController');
const router = express.Router();

router.get("/",HomePageResponse)
router.get("/about", AboutPageResponse)
router.get("/contact",ContactPageResponse)

module.exports = router;