import  { Application, Request, Response } from 'express';
const express = require('express');
const bodyParser =  require('body-parser');
const cors = require ('cors');
import db from './app/models';
import productRouter from "./app/routers/product.route";
const passport = require('passport'); // Import Passport.js
import './app/config/passport.config'; 

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));

app.use(passport.initialize()); // Initialize Passport.js

db.sequelize.sync();   //{alter: true} remove it because we make the change and we don't need it dsad

app.use('/api/v1/products', productRouter);

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
    console.log(`Server is running on ${Port}`);
});
