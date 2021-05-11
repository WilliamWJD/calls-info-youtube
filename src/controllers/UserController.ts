import { Request, Response } from "express";
import User from "../schemas/User";

class UserController{
    async store(req:Request, res:Response):Promise<Response>{
        const { name, username, password, profile } = req.body;

        const checkUser = await User.findOne({
            username
        })

        if(checkUser){
            return res.status(401).json({ error:'Esse usuário já existe em nossa base de dados' })
        }

        const user = await User.create({
            name,
            username,
            password,
            profile
        })

        return res.json(user);
    }
}

export default UserController