

import "reflect-metadata";
import {createConnection} from "typeorm";

var express = require('express')
var morgan = require('morgan')

var cors = require('cors')


import userRoutes from './routes/userRoute'

const app = express();
createConnection();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);

app.listen(3000);
console.log('Server on port', 3000);
