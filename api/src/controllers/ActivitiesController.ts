//CRUD Actividades
import { ActivityModel } from "../models/activities";
import { Usermodel } from "../models/users";
import {Request, Response} from "express"

export default {
    create:async (req:Request , res:Response) =>{
        try {

        const tittle = req.body.tittle;
        const dateEnd = req.body.dateEnd;
        const description = req.body.description;
        const status = req.body.status;
        const idUser = req.body.idUser;
        

        if(!tittle||!dateEnd||!description||!status||!idUser){
            res.status(400).json({msg:"Faltan parametros para crear la actividad"})
            return;
        }
        //validar exst ususarui]

        const user = await  Usermodel.findById(idUser);
        if(!user){
            res.status(400).json({msg:"El usuario que intenta crear la actividad no existe"})
            return;
        }
        const activity = await ActivityModel.create({
            tittle,
            dateEnd,
            description,
            status,
            idUser
        });
        } catch (error) {
            console.log("El Error ocurrido", error);
            res.status(500).json({msg:"Ocurrio un error al Crear la tarea"});
            return;
        }
    }
}