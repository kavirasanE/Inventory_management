import express from "express";
import { UserList } from "../models/UserModels.js";

const router =express.Router();

router.post('/', async(req,res) => {
    try {
        const newUser = {
            Name:req.body.username,
            Email:req.body.email,
            Password:req.body.password,
        }   
        const  user =await UserList.create(newUser);
        return res.status(201).json(user);

    }
    catch(error){
      console.log(error.message);
      return res.status(500).send(error.message)
    }
});


export default router;