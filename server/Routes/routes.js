import express from "express"
import { addUser, allUser ,showUser,editUser,deleteUser} from "./RestApi/rest.js";


const Router=express.Router();

Router.post("/add",addUser)
Router.get("/all",allUser)
Router.get("/:id",showUser)
Router.put("/:id",editUser)
Router.delete("/:id",deleteUser)

export default Router;