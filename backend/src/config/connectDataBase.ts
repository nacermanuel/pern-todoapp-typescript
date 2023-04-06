import { Sequelize } from "sequelize-typescript";

//INICIALIZAR UNA INSTANCIA DE SEQUILIZE CON LOS DATOS DE LA BBDD
const db_sequelize = new Sequelize({
    database: 'todoapppern',
    dialect: 'postgres',
    username: 'postgres',
    password: '1234',
})

//PENDIENTE DE PASAR LOS DATOS MEDIANTE LAS VARIABLES DE ENTORNO PARA DAR MAYOR SEGURIDAD 
//Y CORRECTAS PRACTICAS

export { db_sequelize } ;