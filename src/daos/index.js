import dotenv from "dotenv";
dotenv.config();
let carritoDao;
let productosDao;

switch (process.env.DB_NAME) {
  case "mongoDB":
    import('./productos/mongoProductos.js').then(({ MongoProductos }) => {
      productosDao = new MongoProductos();
    });
    import('./carrito/mongoCarritos.js').then(({ MongoCarritos }) => {
      carritoDao = new MongoCarritos();
    });
    break;
  // case "firebase":
  //   import("./carrito/mongoCarritos.js").then(({ MongoCarritos }) => {
  //     carritoDao = new MongoCarritos();
  //   })
  //   import("./carrito/firebaseCarrito.js").then(({ FirebaseCarritos }) => {
  //     productosDao = new FirebaseCarritos();
  //   })
  //   break;
  default:
    throw new Error("No se ha definido una conexión a la base de datos");
    break;
}

export { productosDao, carritoDao };
