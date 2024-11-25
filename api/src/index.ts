import express from 'express';
const port = 3334;
const app = express();

app.get('/', (req, res) =>{
    res.send('dd');
})

app.listen(port, () => {
   console.log(`App on port ${port}`);
});