const express=require("express")
const patientModels = require("../Models/patientModels")

const router = express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let patient=new patientModels(data)
    let result=await patient.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await patientModels.find()
    res.json(data)
})


module.exports=router