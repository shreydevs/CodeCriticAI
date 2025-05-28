const express = require('express');
const aiController = require('../controlers/ai.controler')
const router = express.Router();

router.post('/review', aiController.getReview);

module.exports = router;