const express = require("express")
const router = express.Router()

let products=[]

router.post("/api/products",(req,res)=>{

const {name,price,image}=req.body

products.push({name,price,image})

res.json({success:true})

})

router.get("/api/products",(req,res)=>{

res.json(products)

})

module.exports = router
