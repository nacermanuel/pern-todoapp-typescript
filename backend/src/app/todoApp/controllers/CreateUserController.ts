import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../contexts/todoApp/User/application/CreateUserUseCase";
import { SequelizeUserImpl } from "../../../contexts/todoApp/User/infrastructure/persistence/sequelize/SequelizeUserImpl";
import { UserValueObject } from "../../../contexts/todoApp/User/domain/valueObjects/UserValueObject";


class CreateUserController {

    // TAL VEZZZ AQUI DEBERIA DE SER EL USER REPOSITORY Y NO SU IMPL
    private readonly _userRepository: SequelizeUserImpl;
    private readonly _creteUserUseCase: CreateUserUseCase ;

    constructor(){
        this._userRepository = new SequelizeUserImpl ;
        this._creteUserUseCase = new CreateUserUseCase(this._userRepository) ;
    }

    async run(req: Request, res: Response): Promise<void>{
        const { id, name, lastName, email } = req.body;

        const user = new UserValueObject(id,name,lastName,email) ;

        const data = await this._creteUserUseCase.run(user) ;

        res.status(200).json(data) ;
    }
}

export { CreateUserController }