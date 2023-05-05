import { ListTaskModel } from "../model/ListTaskModel";

interface ListTaskRepository {
    createListTask(listTask: ListTaskModel): Promise<ListTaskModel | null>;
    findByUserId(id:string):Promise<ListTaskModel|null>;
    updateListTask(listTask: ListTaskModel): Promise<boolean|null>;
}
export { ListTaskRepository }