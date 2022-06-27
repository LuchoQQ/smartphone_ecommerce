import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    trademark: String,
    stock: Number,
    image: String,
    category: String,
    tags: String,
})

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)

export default Product;