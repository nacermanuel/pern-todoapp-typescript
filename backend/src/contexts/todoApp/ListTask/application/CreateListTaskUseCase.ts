import { ListTaskModel } from "../domian/model/ListTaskModel"
import { ListTaskRepository } from "../domian/repository/ListTaskRepository"

class CreateListTaskUseCase{

    private _listTask : ListTaskRepository ;

    constructor(listTask: ListTaskRepository){
        this._listTask = listTask
    }

    async run(listTask: ListTaskModel): Promise<ListTaskModel | null>{
        const newListTask = this._listTask.createListTask(listTask);
        if(!newListTask){
            throw new Error("CreateListTaskUseCase Response: Error ListTask Use Case")
            //return null
        }
        console.log(newListTask)
        return newListTask
    }

}
export {CreateListTaskUseCase}