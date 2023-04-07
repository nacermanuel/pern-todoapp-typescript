import { UserEntity } from "../domain/entities/UserEntity";
import { UserRepository } from "../domain/repository/UserRepository";

class findUserByEmailUseCase {
    private _userRepository: UserRepository

    constructor(userrepository: UserRepository){
        this._userRepository = userrepository ;
    }

    async run(email: string): Promise<UserEntity | null>{
        const userFound = this._userRepository.findByEmail(email)
        
        //If userFound === null (User doesnt exist), return null        
        if(!userFound){
            return null
        }

        return userFound
    }
}

export { findUserByEmailUseCase };