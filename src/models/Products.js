import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    trademark: String,
    stock: Number,
}
    {
        timestamps: true
    }
)

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)

export default Product;