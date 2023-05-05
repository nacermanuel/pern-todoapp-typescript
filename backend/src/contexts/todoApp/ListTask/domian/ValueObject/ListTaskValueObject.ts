import { TaskEntity } from "../../../Task/domain/entities/TaskEntity";
import { ListTaskModel } from "../model/ListTaskModel";

class ListTaskValueObject implements ListTaskModel{
    readonly id: string;
    readonly tasks: object[];
    readonly userId: string;
    
    constructor( id: string , tasks: object[] , userId: string){
        this.id = id ;
        this.tasks = tasks ; 
        this.userId = userId ;
    }
}

export { ListTaskValueObject } ;