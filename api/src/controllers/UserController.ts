import { Usermodel } from "../models/users";
import {Request, Response} from 'express';


//funcion que crea usuarios dentro de base de datos
export default{
    signUp:async (req:Request,res:Response)=>{
        try {
            //obtener info de la peticion
            const name = req.body.name;
            const password = req.body.password;
            const email = req.body.email;
            const roll = req.body.roll;

            //validar que la info exista 

            if(!name || !password || !email || !roll){
                res.status(400).json({msg:"Faltan parametros para crear un usuario"})
                return
            }

            //Creamos registro en la bd

            await Usermodel.create({
                name,
                password,
                email,
                roll
            });

            res.status(200).json({msg:"usuario almacenado con elxito."})
            return

        } catch (error) {
            console.log('el error ocurriodo:',error)
            res.status(500).json({msg:"ocurrio un error al registar el usuario"})
            return
        }
       
    },
    //validar que el usuario exista y lo deja entrar  con singIn
    signIn:async (req:Request,res:Response)=>{
        try {
            //obtener los datos
            const email = req.body.email;
            const password = req.body.password;

            //Biscar al usuario por su correo y contraseña    //findone un registro o un indefinido
            const user = await Usermodel.findOne({
                email,
                password,
            });
           

            //validar que el usuario exista
            if(!user){
                res.status(400).json({msg:"No se encontro usuario con esas credenciales"})
                return;
            }
            res.status(200).json({msg:"El usuario inicio sesion correctamente"})        
        } catch (error) {
            console.log('el error ocurriodo:',error)
            res.status(500).json({msg:"ocurrio un error al registar el usuario"})
            return
            
        }

    }

}