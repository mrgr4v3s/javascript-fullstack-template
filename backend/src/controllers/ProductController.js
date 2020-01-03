const mongoose = require('mongoose');

const Product = mongoose.model('Product');

index = async (req, res) => {
    const { page = 1 } = req.query;

    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
};

show = async (req, res) => {
    const { params } = req;

    const product = await Product.findById(params.id);

    return res.json(product);
};

store = async (req, res) => {
    const { body } = req;

    const product = await Product.create(body);

    return res.json(product);
};

update = async (req, res) => {
    const { body, params } = req;

    const product = await Product.findByIdAndUpdate(params.id, body, { new: true });

    return res.json(product);
};

deleteProduct = async (req, res) => {
    const { params } = req;

    await Product.findByIdAndDelete(params.id);

    return res.send();
};

module.exports = {
    index,
    show,
    store,
    update,
    deleteProduct
};