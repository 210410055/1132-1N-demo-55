import express from 'express';
var router = express.Router();

import db from '../utils/database.js';

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(`select * from product_55`);
    console.log('results', JSON.stringify(results.rows));
    res.render('product_55/index', {
      data: results.rows,
      title: 'Get Products from Database',
      name: '蔡武勳',
      id: '210410055',
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
