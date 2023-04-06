import { Sequelize } from "sequelize-typescript";
import { UserModel } from "../contexts/todoApp/User/infrastructure/persistence/sequelize/SequelizeUserModel";
import { TaskModel } from "../contexts/todoApp/Task/infrastructure/persistence/sequelize/SequelizeTaskModel";

//INICIALIZAR UNA INSTANCIA DE SEQUILIZE CON LOS DATOS DE LA BBDD
const db_sequelize = new Sequelize({
    database: 'todoapppern',
    dialect: 'postgres',
    username: 'postgres',
    password: '1234',
    storage: ':memory:',
})

//PENDIENTE DE PASAR LOS DATOS MEDIANTE LAS VARIABLES DE ENTORNO PARA DAR MAYOR SEGURIDAD 
//Y CORRECTAS PRACTICAS

db_sequelize.addModels([UserModel, TaskModel]);

export { db_sequelize } ;