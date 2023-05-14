import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../../contexts/todoApp/User/application/CreateUserUseCase";
import { SequelizeUserImpl } from "../../../../contexts/todoApp/User/infrastructure/persistence/sequelize/SequelizeUserImpl";
import { UserValueObject } from "../../../../contexts/todoApp/User/domain/valueObjects/UserValueObject";
import { v4 as uuidv4 } from 'uuid';
import { ListTaskValueObject } from "../../../../contexts/todoApp/ListTask/domian/ValueObject/ListTaskValueObject";
import { ListTaskRepository } from "../../../../contexts/todoApp/ListTask/domian/repository/ListTaskRepository";
import { CreateListTaskUseCase } from "../../../../contexts/todoApp/ListTask/application/CreateListTaskUseCase";
import { SequelizeListTaskImplementation } from "../../../../contexts/todoApp/ListTask/infrastructure/persistence/sequelize/SequelizeListTaskImplementation";


class CreateUserController {

    // TAL VEZZZ AQUI DEBERIA DE SER EL USER REPOSITORY Y NO SU IMPL
    private readonly _userRepository: SequelizeUserImpl;
    private readonly _creteUserUseCase: CreateUserUseCase ;
    private readonly _listTaskRepository: ListTaskRepository;
    private readonly _createListTaskUseCase: CreateListTaskUseCase;

    constructor(){
        this._userRepository = new SequelizeUserImpl() ;
        this._creteUserUseCase = new CreateUserUseCase(this._userRepository) ;
        this._listTaskRepository = new SequelizeListTaskImplementation();
        this._createListTaskUseCase = new CreateListTaskUseCase(this._listTaskRepository)        
    }

    async run(req: Request, res: Response): Promise<void>{
        const { name, lastName, email, password } = req.body;

        if (
            typeof name !== "string" ||
            typeof lastName !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string"
          ) {
            res.send('CreateUserController Response: Error user data fields incorrect')
            throw new Error("CreateUserController Response: Error user data fields incorrect")
          }

        const id = uuidv4()
          
        const user = new UserValueObject(id,name,lastName,email,password) ;

        const data = await this._creteUserUseCase.run(user) ;

        //If data == null, User with this email already exist , return null
        if(!data){
          res.send('CreateUserController Response: Error user mail already exist')
          throw new Error("CreateUserController Response: Error user mail already exist")
        }else{

          //ESTO PODRIA REFACTORIZARSE, LA TABLA USUARIO DEBERIA TENER UNA COLUMNA 'TASKS' Y ASI 
          //NO SERIA NECESARIO CREAR UNA FILA EN 'LISTTASK' CADA VEZ QUE UN USUARIO ES CREADO,
          //COMO LO ESTAMOS HACIENDO AQUI

          const listId = uuidv4()
          const userId = data.id
          const tasks: object[] = []

          const listTask = new ListTaskValueObject(listId, tasks,userId);

          const dataList = await this._createListTaskUseCase.run(listTask);

          if(!dataList){
            res.send('CreateUserController Response: Error while creating LiskTask in Register')
            throw new Error("CreateUserController Response: Error while creating LiskTask in Register")
          }
        }
        res.status(200).json(data) ;
    }
}

export { CreateUserController }