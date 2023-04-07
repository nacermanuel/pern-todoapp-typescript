import { UserEntity } from "../domain/entities/UserEntity";
import { UserRepository } from "../domain/repository/UserRepository";

class findUserByEmailUseCase {
    private _userRepository: UserRepository

    constructor(userrepository: UserRepository){
        this._userRepository = userrepository ;
    }

    async run(email: string): Promise<UserEntity | null>{
        const userFound = this._userRepository.findByEmail(email)
        //AQUI ESTA MOSTRANDO UN ERROR CUANDO LE ESPECIFICO EL TIPO DE USERFOUND        
        if(!userFound){
            return null
        }

        return userFound
    }
}

export { findUserByEmailUseCase };