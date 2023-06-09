import { TaskEntity } from "../entities/TaskEntity";

class TaskValueObject implements TaskEntity{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly userId: string;
    readonly date: object;
    readonly complete: boolean;

    constructor(id: string , name: string ,description: string,userId: string, date: object, complete: boolean){
        this.id = id ;
        this.name = name ; 
        this.description = description ;
        this.userId = userId ;
        this.date = date ;
        this.complete = complete ;
    }

}

export { TaskValueObject } ;