const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');

const app = express();

const scylla_connection = require("./cassandra-connector");

scylla_connection.connect().then((connection)=>{
    console.log('connected to scylla db using cassandra driver',connection);
}).catch(err=>{
    console.log("db connection err",err);
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
