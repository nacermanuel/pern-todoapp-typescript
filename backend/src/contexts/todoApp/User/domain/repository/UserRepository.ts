import { UserEntity } from "../entities/UserEntity";

interface UserRepository{
    create(user: UserEntity): Promise<UserEntity>;
}

export { UserRepository }; 