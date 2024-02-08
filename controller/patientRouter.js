const express=require("express")
const patientModels = require("../Models/patientModels")

const router = express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let patient=new patientModels
    let result=await patient.save()
    res.json({
        status:"success"
    })
})

module.exports=router