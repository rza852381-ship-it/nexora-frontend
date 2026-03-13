const express = require("express")
const router = express.Router()

router.get("/api/salla/callback",(req,res)=>{

const code = req.query.code

console.log("Salla Auth Code:",code)

res.send("Salla Connected Successfully")

})

module.exports = router
