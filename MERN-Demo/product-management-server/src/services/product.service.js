import * as repository from '../repositories/product.repository.js';

export const createProduct = async (data) => {

    // validate data before commiting it 
    if(data.price <= 0) {
        throw new Error('Price must be greate than 0');
    }

    return repository.create(data);
}

/**
 * 
 * Ideally your service layer is doing more than just calling your repo methods
 * 
 */

export const getProducts = async () => {
    return repository.findAll();
}

export const getProductById = async (id) => {
    return repository.findById(id);
}

export const updateProduct = async (id, data) => {
    return repository.update(id, data);
}

export const deleteProduct = async (id) => {
    return repository.delete(id);
}