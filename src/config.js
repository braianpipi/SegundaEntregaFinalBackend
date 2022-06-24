export default {
  mongoDB: {
    URL: "mongodb+srv://entregacoder:entregacoder@cluster0.5si1ej1.mongodb.net/ecommerce?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

//   FirebaseFirestore:{
//     let admin = require("firebase-admin");

//     let serviceAccount = require("../segunda-entrega-final-backend-firebase-adminsdk-tlh59-c9fdd5fba3.json");
    
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount)
//     });
//   }
};
