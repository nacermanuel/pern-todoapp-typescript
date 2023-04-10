import { UserEntity } from "../../User/domain/entities/UserEntity";
import { UserRepository } from "../../User/domain/repository/UserRepository";
import { SequelizeUserImpl } from "../../User/infrastructure/persistence/sequelize/SequelizeUserImpl";

class LogInUseCase {
    
    constructor(private readonly _userrepository : UserRepository){
    }

    async run(email: string, password: string): Promise<UserEntity|null>{
        const userFound = await this._userrepository.findByEmail(email)

        if(!userFound){
            return null
        }

        if(userFound.password !== password){
            return null
        }

        return userFound
    }
}

export { LogInUseCase }; 