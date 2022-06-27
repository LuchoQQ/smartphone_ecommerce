import Product from "../../../models/Products";
import connectDB from "../../../services/db";

connectDB();

export default async function handler(req, res) {
  const { method } = req;

  const { name, price, trademark, stock, image, category } = req.body;

  switch (method) {
    // get all products from the list
    case "GET":
      try {
        const products = await Product.find();
        return res.send(products);
      } catch (error) {}
      break;
    // create a new product
    case "POST":
      try {
        const newProduct = new Product({
          name,
          price,
          trademark,
          stock,
          category,
          image,
          tags,
        });

        await newProduct.save();
        return res.json(newProduct);
      } catch (error) {
        res.json(error);
        console.log(error);
      }
      break;
    // update a product
    case "PUT":
      try {
        const id = req.query.params[0];
        const product = {
          name,
          price,
          trademark,
          stock,
          image,
          tags,
          category
        };
        const newProduct = await Product.findByIdAndUpdate(id, product, {
          new: true,
        });
        res.json(newProduct);
      } catch (error) {}
      break;

    // delete a product
    case "DELETE":
      const id = req.query.params[0];
      try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(deleteProduct);
      } catch (error) {}
      break;
  }
}
