import { UserEntity } from "../domain/entities/UserEntity";
import { UserRepository } from "../domain/repository/UserRepository";
import { SequelizeUserImpl } from "../infrastructure/persistence/sequelize/SequelizeUserImpl";

class findAllUsersUseCase {
    private readonly _userRepository: UserRepository ;
    constructor(){
        this._userRepository = new SequelizeUserImpl()
    }

    async run(): Promise<UserEntity[]>{
        
        const data = await this._userRepository.getAll() ;

        return data
    }
}

export { findAllUsersUseCase } ;