const express = require("express");
require('dotenv').config()
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const mainRouter = require('./routes/mainRouter');

app.use('/api', mainRouter);

const server = app.listen(port, () => {
    console.log(`Web server is running on port ${port}`);
})