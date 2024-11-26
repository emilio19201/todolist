import app from "./app";
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Perosnalproyect");
    console.log("conexion a db creada con exito");
    app.listen(4000, () => {
      console.log("servidor corriendo con exito");
    });
  } catch (error) {
    console.log("ocurrio un error al inicializar la aplicacion");
  }
}

main();
