import { UserEntity } from "../entities/UserEntity";

class UserValueObject implements UserEntity{
    readonly id: string;
    readonly name: string;
    readonly lastName: string;

    constructor(id: string, name: string, lastName: string){
        this.id = id ;
        this.name = name ;
        this.lastName = lastName
    }
}

export { UserValueObject } ;