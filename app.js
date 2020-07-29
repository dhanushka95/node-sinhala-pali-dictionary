const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./MysqlDB/config');
const cors = require('cors')

db.authenticate()
    .then(() => console.log('MySQL Database Connected'))
    .catch(err => console.log('Error: ' + err) );

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/dictionary',require('./Routes/dictionaryR'));

app.listen(5010);
