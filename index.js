const express = require("express");
require('dotenv').config()
const cors = require("cors");

// const privateKey  = fs.readFileSync('/etc/letsencrypt/live/anquetil.org/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/anquetil.org/fullchain.pem', 'utf8');
// const credentials = {key: privateKey, cert: certificate};

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const mainRouter = require('./routes/mainRouter');

app.use('/api', mainRouter);

app.listen(port, () => {
  console.log(`Web server is running on port ${port}`);
})

// const serverSSL = https.createServer(credentials, app);

// serverSSL.listen(port, () => {
//   console.log(`Web server is running on port ${port}`);
// })