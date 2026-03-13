const express = require("express")
const router = express.Router()

let orders=[]

router.post("/api/orders",(req,res)=>{

orders.push(req.body)

res.json({success:true})

})

router.get("/api/orders",(req,res)=>{

res.json(orders)

})

module.exports = router
