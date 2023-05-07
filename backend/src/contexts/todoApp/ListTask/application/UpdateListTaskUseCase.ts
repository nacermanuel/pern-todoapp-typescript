import { ListTaskModel } from "../domian/model/ListTaskModel";
import { ListTaskRepository } from "../domian/repository/ListTaskRepository";

class UpdateListTaskUseCase {
    private _listtaskrepository: ListTaskRepository;

    constructor(listTask: ListTaskRepository){
        this._listtaskrepository = listTask
    }

    async run(id:string, tasks:object[]): Promise<boolean|null>{
        const updatedListTask = await this._listtaskrepository.updateListTask(id, tasks);

        if(updatedListTask){
            return true
        }else{
            console.log(`En UpdateListTaskUseCase fue ${updatedListTask}`);
            return null
        }
    }

}

export {UpdateListTaskUseCase}