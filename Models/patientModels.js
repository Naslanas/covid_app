const mongoose=require("mongoose")
const patientSchema = mongoose.Schema(
    {
        name:String,
        phone:String,
        address:String,
        symptoms:String,
        status:String
    }
)

module.exports=mongoose.model("patient",patientSchema)