import { resolve } from 'node:path';
import express, {json, urlencoded} from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet';
import cors from 'cors'
import { db_sequelize } from '../../config/connectDataBase';



import { SequelizeUserModel } from '../../contexts/todoApp/User/infrastructure/persistence/sequelize/SequelizeUserModel';
import { mainRouter } from './routers';



//CONFIG VARIABLES DE ENTORNO
dotenv.config({ path: resolve(__dirname, "../../../.env") })

//VALIDAR QUE LAS VARIABLES DE ENTORNO ESTEN DEFINIDAS. SI NO, ARROJAR ERROR
const missing = ["PORT", "DB_URI", "JWT_PASS"].filter(
    (env) => !process.env[env],
)
if (missing.length) {
throw new Error(`Missing environment variables: ${missing.join(", ")}.`)
}

//INSTANCIANDO EL SERVIDOR
const app = express()
const port = process.env.PORT 


//MIDDELWARES
app.use(helmet());
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use("/api",mainRouter)



//INICIANDO EL SERVIDOR
app.listen(port, async () => {

  try {
    await db_sequelize.authenticate();
    await db_sequelize.sync({ force: true });
    console.log('[database]: Connection to database has been established successfully.');
  } catch (error) {
    console.error('[database]: Unable to connect to the database:', error);
  }

  console.log(`[server]: Server is running at http://localhost:${port}`);
});