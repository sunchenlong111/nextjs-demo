import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(async connection => {

  console.log(connection)
  connection.close()
  console.log('test git3')
}).catch(error => console.log(error));
