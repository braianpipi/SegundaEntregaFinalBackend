import { Router } from "express";
const router  = new Router()
import {carritoDao as api} from "../daos/index.js"
// * POST: ‘/’ - Crea un carrito y devuelve su id.
router.post('/',async(req,res)=>{
    const result = await api.createCart();
    res.status(200).json({"success" : "Carrito creado con ID "+ result._id})
})
// * DELETE: ‘/:id’ - Vacía un carrito y lo elimina.
router.delete('/:id',async(req,res)=>{
    const { id } = req.params;
	const result = await api.deleteCart(id);
    result 
    ? res.status(200).json({"success" : "Carrito Borrado"})
    : res.status(400).json({"error": "ID Inexistente"})
})
// * POST: ‘/:id/productos/:id_prod’ - Para incorporar productos al carrito por su id de producto
router.post('/:id/productos',async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})
// * GET: ‘/:id/productos’ - Me permite listar todos los productos guardados en el carrito
router.get('/:id/productos',async(req,res)=>{
	try {
        
    } catch (error) {
        
    }
})
// * DELETE: ‘/:id/productos/:id_prod’ - Eliminar un producto del carrito por su id de carrito y de producto
router.delete('/:id/productos/:id_prod',async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

export default router





