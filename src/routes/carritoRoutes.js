import { Router } from "express";
const router = new Router();
import { carritoDao as api } from "../daos/index.js";
// * POST: ‘/’ - Crea un carrito y devuelve su id.
router.post("/", async (req, res) => {
  try {
    const nuevoCarrito = await api.create(req.body);
    res.status(201).json({
      message: `Carrito creado con éxito con el id ${nuevoCarrito._id}`,
    });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});
// * DELETE: ‘/:id’ - Vacía un carrito y lo elimina.
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await api.deleteCart(id);
    result
      ? res.status(200).json({ success: "Carrito Borrado" })
      : res.status(400).json({ error: "ID Inexistente" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});
// * POST: ‘/:id/productos/:id_prod’ - Para incorporar productos al carrito por su id de producto
router.post("/:id/productos", async (req, res) => {
  try {
    const { id } = req.params;
    const carrito = await api.getById(id);
    const productos = req.body;
    if (carrito && productos) {
      const carritoNuevo = await api.addProductos(carrito, productos);
      const carritoRenovado = await api.getById(carritoNuevo._id);
      res.status(201).json({
        message: `Productos agregado en el carrito ${carritoRenovado} `,
      });
    } else {
      res.status(404).json({ message: "Datos ingresados incorrectamente" });
    }
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});
// * GET: ‘/:id/productos’ - Me permite listar todos los productos guardados en el carrito
router.get("/:id/productos", async (req, res) => {
  try {
    const { id } = req.params;
    const carrito = await api.getById(id);
    if (carrito) {
      return res.status(200).json(carrito.productos);
    } else {
      res.status(404).json({ message: "Carrito no encontrado. id: " + id });
    }
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});
// * DELETE: ‘/:id/productos/:id_prod’ - Eliminar un producto del carrito por su id de carrito y de producto
router.delete("/:id/productos/:id_prod", async (req, res) => {
  try {
    const { id } = req.params;
    const carrito = await api.getById(id);
    const { id_prod } = req.params;
    if (carrito) {
      const carritoNuevo = await api.deleteProduct(carrito, id_prod);
      const carritoModificado = await api.getById(carritoNuevo._id);
      res.status(201).json({
        message: `Producto Eliminado Correctamente tu carrito ${carritoModificado}`,
      });
    } else {
      res
        .status(404)
        .json({ message: "La informacion ingresada es incorrecta" });
    }
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
