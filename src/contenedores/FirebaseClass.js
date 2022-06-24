CRUD()

async function CRUD(){
    const db = admin.firestore();
    const collectionProductos = db.collection('productos')
try {
    await collectionProductos.doc().create({nombre:"Julian", apellido:"Gomez"})
} catch (error) {
    console.log("Error:", error)
}

}