import dotenv from "dotenv";
dotenv.config();

let productosDao;
switch (procees.env.DB_NAME) {
  case "mongoDB":
    import("./productos/mongoProductos.js").then(({ MongoProductos }) => {
      productosDao = new MongoProductos();
    });
    break;
  case "firebase":
    import("./productos/firebaseProductos.js").then(({ FirebaseProductos }) => {
      productosDao = new FirebaseProductos();
    });
    break;
  default:
    console.log("Esta en default");
    break;
}

let carritoDao;
switch (process.env.DB_NAME) {
  case "mongoDB":
    import("./carrito/mongodbCarritos.js").then(({ MongoCarritos }) => {
      carritoDao = new MongoCarritos();
    });
    break;
  case "firebase":
    import("./carrito/firebaseCarrito.js").then(({ FirebaseCarritos }) => {
      productosDao = new FirebaseCarritos();
    });
    break;
  default:
    console.log("Esta en default");
    break;
}

export default { productosDao, carritoDao };
