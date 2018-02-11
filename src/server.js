import express from 'express';
import bodyParser from 'body-parser';
import registerRouters from './api/routes';
import morgan from 'morgan';

const app = express();
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  
app.use(morgan((process.env.ENV == 'prod' ? 'tiny' : 'dev')));

registerRouters(app);

const port = process.env.PORT || 3004;
const server = app.listen(port, () => console.log(`server started on port ${port}`));

export {
  server,
  app,
};
