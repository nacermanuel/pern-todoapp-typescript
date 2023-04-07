import { UserEntity } from "../domain/entities/UserEntity";
import { UserRepository } from "../domain/repository/UserRepository";

class CreateUserUseCase {
    private _userRepository: UserRepository ;

    constructor(userrepository: UserRepository){
        this._userRepository = userrepository ;
    }

    async run(user: UserEntity): Promise<UserEntity | null>{
        
        const userFound = await this._userRepository.findByEmail(user.email)
        
        //If user email was found, User with this email already exist , return null
        if(userFound){
            return null
        }

        const newUser = this._userRepository.create(user);
        return newUser
    }
}

export { CreateUserUseCase } ;