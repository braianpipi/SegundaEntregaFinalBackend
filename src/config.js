import dotenv from "dotenv";
dotenv.config();
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const DB_TITLE = process.env.DB_TITLE;

export default {
  mongoDB: {
    URL: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.5si1ej1.mongodb.net/${DB_TITLE}?retryWrites=true&w=majority`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  }

//   FirebaseFirestore:{
//     let admin = require("firebase-admin");

//     let serviceAccount = require("../segunda-entrega-final-backend-firebase-adminsdk-tlh59-c9fdd5fba3.json");
    
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount)
//     });
//   }
};
