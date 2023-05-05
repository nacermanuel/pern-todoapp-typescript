import { ListTaskModel } from "../domian/model/ListTaskModel";
import { ListTaskRepository } from "../domian/repository/ListTaskRepository";

class UpdateListTaskUseCase {
    private _listtaskrepository: ListTaskRepository;

    constructor(listTask: ListTaskRepository){
        this._listtaskrepository = listTask
    }

    async run(listTask: ListTaskModel): Promise<boolean|null>{
        const updatedListTask = await this._listtaskrepository.updateListTask(listTask);

        if(updatedListTask){
            return true
        }else{
            console.log(`En UpdateListTaskUseCase fue ${updatedListTask}`);
            return null
        }
    }

}

export {UpdateListTaskUseCase}