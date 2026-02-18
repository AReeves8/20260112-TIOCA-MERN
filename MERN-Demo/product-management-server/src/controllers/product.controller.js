import * as service from '../services/product.service.js';

export const create = async (req, res) => {

    try {
        const product = await service.createProduct(req.body);
        res.status(201).json(product);
    } catch(error) {
        console.log(`ERROR OCCURED: [${error}]`);
        res.status(500).json('Oops. Something went wrong.');      
    }
}

export const getAll = async (req, res) => {
    const products = await service.getProducts();
    res.status(200).json(products);
}

export const getById = async (req, res) => {
    const product = await service.getProductById(req.params.id);
    res.status(200).json(product);
}

export const updateById = async (req, res) => {
    const product = await service.updateProduct(req.params.id, req.body);
    res.status(200).json(product);
}

export const deleteById = async (req, res) => {
    await service.deleteProduct(req.params.id);
    res.status(204);
}