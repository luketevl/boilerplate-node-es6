import express from 'express';

import { example } from './../controllers/exampleController';

const router = express.Router();

router.post('/', (req, res) => {
  const result = example();
  res.status(204).send();
});

export default router;
