import { UserEntity } from "../entities/UserEntity";

class UserValueObject implements UserEntity{
    readonly id: string;
    readonly name: string;
    readonly lastName: string;
    readonly email: string;

    constructor(id: string, name: string, lastName: string, email:string){
        this.id = id ;
        this.name = name ;
        this.lastName = lastName ;
        this.email = email ;
    }
}

export { UserValueObject } ;