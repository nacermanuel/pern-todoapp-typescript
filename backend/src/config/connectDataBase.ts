import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import dotenv from 'dotenv'
dotenv.config()

import { SequelizeUserModel } from "../contexts/todoApp/User/infrastructure/persistence/sequelize/SequelizeUserModel";
import { SequelizeTaskModel } from "../contexts/todoApp/Task/infrastructure/persistence/sequelize/SequelizeTaskModel";
import { SequelizeListTaskModel } from "../contexts/todoApp/ListTask/infrastructure/persistence/sequelize/SequelizeListTaskModel";

//INICIALIZAR UNA INSTANCIA DE SEQUILIZE CON LOS DATOS DE LA BBDD
// const db_sequelize = new Sequelize({
//     database: 'todoapppern',
//     dialect: 'postgres',
//     username: 'postgres',
//     password: '1234',
//     storage: ':memory:',
// })

const db_uri: string | undefined = process.env.DB_URI;

if (!db_uri) {
    throw new Error('DB_URI is not defined.');
}

const db_sequelize = new Sequelize(db_uri) // Example for postgres

//PENDIENTE DE PASAR LOS DATOS MEDIANTE LAS VARIABLES DE ENTORNO PARA DAR MAYOR SEGURIDAD 
//Y CORRECTAS PRACTICAS

db_sequelize.addModels([SequelizeUserModel, SequelizeTaskModel, SequelizeListTaskModel]);

export { db_sequelize } ;