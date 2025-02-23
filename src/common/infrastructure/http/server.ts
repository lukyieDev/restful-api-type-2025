import { env } from "../env";
import { initializateConnec } from "../typeorm/connecDb";
import { app } from "./app";

//DataBase Inicialization
initializateConnec();

//Iniciando a api
app.listen(env.PORT, ()=>{
  console.log(`API running on port: ${env.PORT} 🐉`);
})


