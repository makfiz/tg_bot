const express = require('express');

const router = express.Router();

const { tryCatchWrapper } = require('../../middlewares')


router.get('/', tryCatchWrapper());


module.exports = router;
