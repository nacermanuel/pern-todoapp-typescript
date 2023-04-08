import { Request, Response } from "express";
import { UserRepository } from "../../../../contexts/todoApp/User/domain/repository/UserRepository";
import { SequelizeUserImpl } from "../../../../contexts/todoApp/User/infrastructure/persistence/sequelize/SequelizeUserImpl";
import { UserEntity } from "../../../../contexts/todoApp/User/domain/entities/UserEntity";
import { findAllUsersUseCase } from "../../../../contexts/todoApp/User/application/findAllUsersUseCase";

class FindAllUsersController {

    private readonly _userRepository : findAllUsersUseCase;

    constructor(){
        this._userRepository = new findAllUsersUseCase()
    }

    async run( req: Request, res: Response): Promise<void>{
        const data = await this._userRepository.run()

        res.status(200).json(data);
    }

}

export { FindAllUsersController } ;