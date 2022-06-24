import mongoose from "mongoose";
import config from "../config.js";

mongoose.connect(config.mongoDB.URL, config.mongoDB.options);

class MongoClass {
  constructor(collectionName, docSchema) {
    this.collection = mongoose.model(collectionName, docSchema);
  }
  async getAll() {
    try {
      const allProducts = await this.collection.find({}).pretty();
      return allProducts;
    } catch (error) {
      throw new Error("error :", error);
    }
  }
  async getbyI(id){
    try {
      const elemento = await this.collection.findById(id)
      return elemento
    } catch (error) {
      throw new Error("error :", error);
    }
  }
  async create(obj) {
    try {
      const nuevoProducto = await this.collection.create(obj);
      return nuevoProducto;
    } catch (error) {
      throw new Error("error :", error);
    }
  }
  async deleteById(id) {
    try {
      const deleteProduct = await this.collection.deleteOne({ _id: id });
      return deleteProduct;
    } catch (error) {
      throw new Error("error :", error);
    }
  }
  // https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/
  async updateProductById(id, obj) {
    try {
      const updatedDoc = await this.collection.findByIdAndUpdate(id, obj);
      return updatedDoc;
    } catch (error) {
      throw new Error("error :", error);
    }
  }
}

export default MongoClass;
