import  express, { Router } from 'express';
import morgan from 'morgan';
import  ApiRoute  from './routes/api.routes';
import AuthRoute from './routes/auth.routes';
const app  = express();

app.use(morgan('dev'));

app.use('/api',ApiRoute);
app.use('/auth',AuthRoute);
export default app;