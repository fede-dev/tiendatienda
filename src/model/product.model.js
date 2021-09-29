const fs = require("fs");
const path = require("path");

const getProducts = () => {
  const allProducts = fs.readFileSync(path.join(__dirname, "./tienda.json"), {
    encoding: "utf-8",
  });
  return JSON.parse(allProducts);
};

const findProductByQuery = (name) =>
  getProducts().filter((item) => item.Nombre.includes(name));
const findProductById = (id) => getProducts().find((item) => item.EAN == id);

const getProductByQuery = (name) => {
  const productName = findProductByQuery(name);
  return productName;
};

const getProductId = (id) => {
  const productId = findProductById(id);
  return productId;
};

module.exports = {
  getProducts,
  getProductByQuery,
  getProductId,
};
