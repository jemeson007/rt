import express from 'express';
import productRoutes from './routes/products/index';

const port = 3334;
const app = express();



app.get('/', (req, res) =>{
    res.send('dd');
});

app.use('/products', productRoutes);

app.listen(port, () => {
   console.log(`App on port ${port}`);
});