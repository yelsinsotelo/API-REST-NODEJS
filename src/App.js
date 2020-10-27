import  express, { Router } from 'express';
import morgan from 'morgan';
import  ApiRoute  from './routes/api.routes';
import AuthRoute from './routes/auth.routes';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import webpush from 'web-push'
import path from 'path'
import cors from 'cors'
const app  = express();
app.use(express.json()); // for parsing application/json
app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'images')));
app.use('/api',ApiRoute);
app.use('/auth',AuthRoute);

export default app;