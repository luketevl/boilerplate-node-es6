import exampleInstall from './exampleRoutes';

const registerRouters = app => {
  app.get('/', (req, res) => res.json({message: 'Welcome to boilerplate'}));
  
  app.use('/example', exampleInstall);
};
export default registerRouters;
