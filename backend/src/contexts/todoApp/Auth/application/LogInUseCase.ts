import { UserEntity } from "../../User/domain/entities/UserEntity";
import { UserRepository } from "../../User/domain/repository/UserRepository";
import { SequelizeUserImpl } from "../../User/infrastructure/persistence/sequelize/SequelizeUserImpl";

class LogInUseCase {
    
    constructor(private readonly _userrepository : UserRepository){
    }

    async run(email: string, password: string): Promise<UserEntity|null>{
        const userFound = await this._userrepository.findByEmail(email)

        if(!userFound){
            console.log('LOGIN USE CASE usuario null');
            
            return null
        }

        if(userFound.password !== password){
            console.log('LOGIN USE CASE  clave no coincide');
            
            return null
        }

        return userFound
    }
}

export { LogInUseCase }; 