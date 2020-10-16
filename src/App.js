import  express, { Router } from 'express';
import morgan from 'morgan';
import  ApiRoute  from './routes/api.routes';
import AuthRoute from './routes/auth.routes';
import cors from 'cors'
const app  = express();
app.use(express.json()); // for parsing application/json
app.use(cors());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'));

app.use('/api',ApiRoute);
app.use('/auth',AuthRoute);
export default app;