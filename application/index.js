const express = require('express');
const path = require('path');
require('dotenv').config();
const fs = require("fs");

const defaultPort = 8080;
const PORT = process.env.PORT || defaultPort;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(__dirname + '/public'));

const reactBuildFolderPath = './build';
if (!fs.existsSync(reactBuildFolderPath)) {
    throw new Error('React build folder does not exist. Please run `npm run build` and try again.')
}
app.use(express.static(reactBuildFolderPath));
app.use('/', require('./controllers/index'));

app.listen(PORT, () => {
    console.log(`Server started listening on PORT ${PORT}. Visit http://localhost:${PORT} in your browser`);
});

