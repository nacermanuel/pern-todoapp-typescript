import { UserEntity } from "../entities/UserEntity";

interface UserRepository{
    create(user: UserEntity): Promise<UserEntity>;
    findByEmail(email:string): Promise<UserEntity | null>;
    getAll(): Promise<UserEntity[]> ;
}

export { UserRepository }; 