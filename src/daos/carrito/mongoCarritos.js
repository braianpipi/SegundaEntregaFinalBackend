import mongoose from "mongoose";
import MongoClass from "../../contenedores/MongoClass.js";

export class MongoCarritos extends MongoClass {
  constructor() {
    super("carrito", {
      timestamp: { type: Date, default: Date.now },
      products: [{ type: mongoose.Schema.Types.ObjectId, ref: "productos" }],
      cantidad: {
        type: Number,
        required: true,
        default: 1,
      },
    });
  }
  async addProducts(carrito, productos) {
    productos.forEach((producto) => {
      const productoEnCarrito = carrito.productos.find(
        (p) => p._id == producto._id
      );
      if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
      } else {
        carrito.productos.push(producto);
      }
    });
    const carritoUpdated = await this.collection.findByIdAndUpdate(
      carrito._id,
      { productos: carrito.productos }
    );
    return carritoUpdated;
  }
  async deleteCart(id) {
    try {
      const nuevoCarrito = await this.collection.deleteOne({ _id: id });
      if (nuevoCarrito.deletedCount == 0) {
        return null;
      } else {
        return nuevoCarrito;
      }
    } catch (error) {
      throw new Error("No se encontro ningun carrito con ese ID");
    }
  }
  async deleteProduct(carrito, productoId) {
    const productoEnCarrito = carrito.productos.find(
      (p) => p._id == productoId
    );
    if (productoEnCarrito) {
      productoEnCarrito.cantidad > 1
        ? productoEnCarrito.cantidad--
        : (carrito.productos = carrito.productos.filter(
            (p) => p._id != productoId
          ));
    } else {
      throw new Error("El producto no esta en el carrito");
    }
    const carritoUpdated = await this.collection.findByIdAndUpdate(
      carrito._id,
      { productos: carrito.productos }
    );
    return carritoUpdated;
  }
}
