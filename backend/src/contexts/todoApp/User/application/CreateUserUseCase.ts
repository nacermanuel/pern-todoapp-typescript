import { UserEntity } from "../domain/entities/UserEntity";
import { UserRepository } from "../domain/repository/UserRepository";

class CreateUserUseCase {
    private _userRepository: UserRepository ;

    constructor(userrepository: UserRepository){
        this._userRepository = userrepository ;
    }

    async run(user: UserEntity): Promise<UserEntity>{
        
        const userFound = await this._userRepository.findByEmail(user.email)
        
        if(userFound){
            throw new Error(`El usuario con ese email ya existe`)
        }

        const newUser = this._userRepository.create(user);
        return newUser
    }
}

export { CreateUserUseCase } ;