const cartsServices = require('../cartsServices/cartsServices');

class CartsController {
  getCarts = async (req, res) => {
    return await cartsServices.getCarts(res);
  };

  getCartProductById = async (req, res) => {
    const { cid } = req.params;
    return await cartsServices.getCartProductById(cid, res);
  };

  addCart = async (req, res) => {
    return await cartsServices.addCart(res);
  };

  addProductToCart = async (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    return await cartsServices.addProductToCart(cid, pid, quantity, res, req);
  };

  purchaseCart = async (req, res) => {
    const { cid } = req.params;
    await cartsServices.purchaseCart(cid, req, res);
  };

  purchaseCartMail = async (req, res) => {
    const { cid } = req.params;
    await cartsServices.purchaseCartMail(cid, req, res);
  };

  updateCart = async (req, res) => {
    const { cid } = req.params;
    const { products } = req.body;
    await cartsServices.updateCart(cid, products, res);
  };

  updateProductQuantity = async (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    await cartsServices.updateProductQuantity(cid, pid, quantity, res);
  };

  deleteCart = async (req, res) => {
    const { cid } = req.params;
    return await cartsServices.deleteCart(cid, res);
  };

  deleteProductFromCart = async (req, res) => {
    const { cid, pid } = req.params;
    return await cartsServices.deleteProductFromCart(cid, pid, res, req);
  };

  deleteAllProductsFromCart = async (req, res) => {
    const { cid } = req.params;
    await cartsServices.deleteAllProductsFromCart(cid, res);
  };
}

module.exports = new CartsController();

