import { dataSource } from "."


export function initializateConnec(){
  dataSource
  .initialize()
  .then(()=>{
    console.log('Database Sucess conection');
  })
  .catch((error)=>{
    console.log('Error initializing data source:', error)
  })
}