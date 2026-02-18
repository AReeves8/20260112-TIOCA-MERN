import mongoose from 'mongoose';

export const Category = Object.freeze({
    PRODUCE: 'Produce',
    DAIRY: 'Dairy',
    MEAT: 'Meat',
    GROCERY: 'Grocery'
});

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        brand: {type: String, required: true},
        price: {type: String, required: true},
        category: {
            type: String, 
            enum: Object.values(Category),
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);
export default Product;