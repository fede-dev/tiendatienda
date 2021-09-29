const { productModel } = require("../model");

const productController = {
  getAllProducts: (req, res, next) => {
    const allProducts = productModel.getProducts();
    res.json({ products: allProducts });
  },

  getProductByName: (req, res, next) => {
    const productName = productModel.getProductByQuery(req.query.name);
    if (productName) {
      res.json({ products: productName });
    } else {
      res.json("No se ha encontrado el producto");
    }
  },

  getProductById: (req, res, next) => {
    const productId = productModel.getProductId(req.params.id);
    if (productId) {
      res.json({ product: productId });
    } else {
      res.json("No se ha encontrado el producto Id");
    }
  },
};

module.exports = productController;
