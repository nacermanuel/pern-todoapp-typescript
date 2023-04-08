import { TaskEntity } from "../entities/TaskEntity";

class TaskValueObject implements TaskEntity{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly userId: string;

    constructor(id: string , name: string ,description: string,userId: string){
        this.id = id ;
        this.name = name ; 
        this.description = description ;
        this.userId = userId ;
    }
}

export { TaskValueObject } ;