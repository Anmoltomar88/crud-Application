import { User } from "../../Database/Schema/user-schema.js";
import  express from "express";

async function addUser(req,res) {
    try {
        const userData = req.body;
        const newUser = new User(userData);
        const response = await newUser.save();
        res.status(201).json(response);
        console.log(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding userData");
    }
}

const allUser= async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
    }
}

const showUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
    }
}

const editUser=async(req,res)=>{
    const {id} = req.params;
    try {
        let user=req.body;
        const upUser=new User(user);
        await User.updateOne({_id:id},upUser);
        res.status(200).json(upUser);
    } catch (error) {
        console.log(error);
    }
}

const deleteUser=async(req,res)=>{
    const {id} = req.params;
    try {
        await User.deleteOne({_id:id})
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export { addUser ,allUser ,showUser ,editUser ,deleteUser}