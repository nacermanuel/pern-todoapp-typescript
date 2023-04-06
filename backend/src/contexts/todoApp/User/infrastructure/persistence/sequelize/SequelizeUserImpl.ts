import { UserEntity } from "../../../domain/entities/UserEntity";
import { UserRepository } from "../../../domain/repository/UserRepository";
import { SequelizeUserModel } from "./SequelizeUserModel";


class SequelizeUserImpl implements UserRepository{
    async create(user: UserEntity): Promise<UserEntity>{
        const newUser = new SequelizeUserModel(user);
        await newUser.save()
        return newUser
    }   
}

export { SequelizeUserImpl };