import { Router } from "express";
import { productosDao as api } from "../daos/index.js";
const router = new Router();

const isAdmin = true;

function adminOrClient(req, res, next) {
  if (!isAdmin) {
    res.send("No tienes acceso a esta ruta");
  } else {
    next();
  }
}

// * GET: ‘/:id?’ - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
router.get("/", async (req, res) => {
  try {
    const allProducts = await api.getAll();
    allProducts
      ? res.status(200).json(allProducts)
      : res.status(404).json({ message: "No hay productos disponibles" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// * POST: ‘/’ - Para incorporar productos al listado (disponible para administradores)
router.post("/", adminOrClient, async (req, res) => {
  try {
    const crearProductos = await api.create(req.body);
    res.status(201).json(crearProductos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// * DELETE: ‘/:id’ - Borra un producto por su id (disponible para administradores)
router.delete("/:id", adminOrClient, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await api.deletebyId(id);
    res.json(deleteProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// * PUT: ‘/:id’ - Actualiza un producto por su id (disponible para administradores)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const propiedades = ["title", "description", "thumbnail", "price", "stock"];
    const all = propiedades.every((e) => body.hasOwnProperty(e));
    if (all) {
      const result = await api.updateById(id, body);
      result
        ? res.status(200).json({ success: "Producto Actualizado" })
        : res.status(400).json({ error: "ID no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
