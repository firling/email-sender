const router = require("express").Router();

const { sendMail } = require("../controllers/mainController");
router.post('/sendMail', sendMail);

module.exports = router;