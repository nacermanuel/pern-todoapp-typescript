import { UserEntity } from "../../../domain/entities/UserEntity";
import { UserRepository } from "../../../domain/repository/UserRepository";
import { SequelizeUserModel } from "./SequelizeUserModel";


class SequelizeUserImpl implements UserRepository{
    async create(user: UserEntity): Promise<UserEntity>{
        const newUser = new SequelizeUserModel(user);
        await newUser.save()
        return newUser
    }   

    async findByEmail(email: string): Promise<UserEntity | null> {
        const user: UserEntity | null = await SequelizeUserModel.findOne({where:{email: email}})

        //If user not found, retur null
        if(!user){
            return null
        }

        return user
    }
}

export { SequelizeUserImpl };