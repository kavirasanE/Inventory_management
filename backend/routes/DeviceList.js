import express from "express";
import { Device } from "../models/bookModels.js";

const router =express.Router();

//Route for Save a new Device
router.post('/', async(req,res) => {
    try{
        if(
            !req.body.title ||
            !req.body.DeviceName ||
            !req.body.DSN
        ){
         return res.status(400).send({
            message: "send all field",
         });
        }
        const newDevice ={
            title :req.body.title,
            DeviceName:req.body.DeviceName,
            DSN:req.body.DSN,
        }; 
        const Devices = await Device.create(newDevice);
        return res.status(201).send (Devices);
    }
    catch(error){
        console.log(error.message);
        return res.status(500).send({message:error.message});

    }
});
//Route to get all books
router.get('/' , async (req,res) => {
    try{
       const device = await Device.find({});
       return res.status(200).json({
        count : device.length,
        data: device,
       });
     }
    catch (error){
     console.log(error.message);
     return res.status(500).send({message:error.message});
    }

})
// get the device by id 
router.get('/:id',async (req,res)=>{
    try{
        const {id} =req.params;
       const device =await Device.findById(id);
       return res.status(200).json(device)

    }

    catch(error){
        console.log(error.message);
        return res.status(500).send({message:error.message});
    }
});
// update the device 
router.put('/:id',  async(req,res)=>{
    try{
        if( !req.body.title ||
            !req.body.DeviceName ||
            !req.body.DSN){
               return res.status(400).send({message:"updated sucessfully"});
            }
         const {id}=req.params;
         const device =await Device.findByIdAndUpdate(id,req.body);
         if(!device){
            return res.status(404).send ({message: 'Device not found'});
         }
         return  res.status(200).send({message:'device updted'});
    }
    catch(error){
        console.log(error);
        return res.status(500).send({message:error.message});
    }
});

//Delete the device 
router.delete('/:id' , async (req,res) => {
    try{
       const{id} = req.params;
       const device = await Device.findByIdAndDelete(id);
       if(!device) {
        return res.status(404).send({message:'device not found'});
        }
       return res.status(200).send({message:'deleted successffully'});
    }
    catch(error){
     console.log(error.message);
     return res.status(500).send({message:error.message});
    }
});



export default router;