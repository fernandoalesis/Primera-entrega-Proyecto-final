const express = require("express");
const Contenedor = require("./contenedorProductos");
const products = express.Router();

const contenedorProductos = new Contenedor("productos.txt");

products.get("/", async (req, res) => {
  try {
    const products = await contenedorProductos.getAll();
    res.send(products);
  } catch (error) {
    res.status(500).send("hubo un error en el servidor");
  }
});
// /api/productos/5
// /api/productos/:productId

// products.post("/", async (req, res) => {
//   console.log("body", req.body);
//   const newProduct = req.body;
//   const productos = await contenedorProductos.save(newProduct);
//   res.json({
//     message: "producto creado",
//     response: productos,
//   });
// });
products;

products.get("/home", (req, res) => {
  res.send("peticion home");
});

module.exports = products;
