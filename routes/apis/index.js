// jack 꺼

const express = require('express');
const router = express.Router();

const momentumRouter = require('./momentum');

router.use("/momentum", momentumRouter);


module.exports = router;
