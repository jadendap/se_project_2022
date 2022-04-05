import express from 'express';
import data from "./data.js";

const app = express();

app.get('/api/products',(req, res) => {
    res.send(data.products);
});
app.get('/api/product/id/:id',(req, res) => {
    const product = data.products.find((x) => x.id === req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Product Not Found'});
    }
});


const port = process.env.Port || 9000;
app.listen(port, () => {
    console.log(`Server at ${port}`);
});