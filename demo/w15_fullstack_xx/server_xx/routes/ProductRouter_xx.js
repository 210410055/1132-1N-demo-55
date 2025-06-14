import express from 'express';
var router = express.Router();

import db from '../utils/database.js';

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(`select * from product_xx`);
    // console.log('results', JSON.stringify(results.rows));
    res.render('product_xx/index', {
      data: results.rows,
      title: 'Get Products from Database',
      name: 'htchung',
      id: '123456789',
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
