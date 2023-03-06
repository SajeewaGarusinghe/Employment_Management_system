const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const employeeRoutes = require('./routes/employeeRoutes');

connectDB();

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/employees', employeeRoutes);

app.use(errorHandler); //this will over write the default express error handler

app.listen(port, () => console.log(`Server 💻 started on port ${port}`.red));
