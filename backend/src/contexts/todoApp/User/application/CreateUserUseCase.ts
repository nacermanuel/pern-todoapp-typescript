import { UserEntity } from "../domain/entities/UserEntity";
import { UserRepository } from "../domain/repository/UserRepository";

class CreateUserUseCase {
    private _userRepository: UserRepository ;

    constructor(userrepository: UserRepository){
        this._userRepository = userrepository ;
    }

    async run(user: UserEntity): Promise<UserEntity>{
        const newUser = this._userRepository.create(user);
        return newUser
    }
}

export { CreateUserUseCase } ;