const express=require("express")
const cors= require("cors")
const mongoose=require("mongoose")
const patientRoute=require("./controller/patientRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nasla:nasla1711@cluster0.f8gbros.mongodb.net/covidDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/patient",patientRoute)


app.listen(3011,()=>{
    console.log("Server running")
})