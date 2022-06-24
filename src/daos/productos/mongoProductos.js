import MongoClass from "../../contenedores/MongoClass.js";

 export class MongoProductos extends MongoClass{
    constructor(){
        super('productos',{
            title:{type:String,require:true,max:100},
            description:{type:String,require:true,max:500},
            thumbnail:{type:String,require:true,max:200},
            stock:{type:Number,require:true,max:1000},
            price:{type:Number,require:true},
            timestamp:{type:Date,default: Date.now},
        })
    }

}
