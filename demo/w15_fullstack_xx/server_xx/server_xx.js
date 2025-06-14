import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import ProductRouter_xx from './routes/ProductRouter_xx.js';
import apiProductRouter from './routes/api/apiProductRouter_xx.js';

const app_xx = express();

app_xx.use(cors());
app_xx.use(logger('dev'));
app_xx.use(express.static('public'));
app_xx.set('view engine', 'ejs');

app_xx.use('/api/product_xx', apiProductRouter);
app_xx.use('/product_xx', ProductRouter_xx);
app_xx.use('/product_xx/static', (req, res, next) => {
  res.render('product_xx/static_xx', {
    title: 'Get Products - Static',
    name: 'htchung',
    id: '123456789',
  });
});

app_xx.use('/blog_xx/static', (req, res, next) => {
  res.render('blog_xx/static_xx', {
    title: 'Get Blogs - Static',
    name: 'htchung',
    id: '123456789',
  });
});

app_xx.use('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
    name: 'htchung',
    id: '123456789',
  });
});

const port = process.env.PORT || 5000;
// console.log('process.env.PORT', process.env.PORT);

app_xx.listen(port, () => {
  console.log(`Connecting ${process.env.DATABASE} server on port: ${port}`);
});
