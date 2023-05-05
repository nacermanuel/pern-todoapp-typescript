import { ListTaskModel } from "../model/ListTaskModel";

interface ListTaskRepository {
    createListTask(listTask: ListTaskModel): Promise<ListTaskModel | null>;
    findByUserId(id:string):Promise<ListTaskModel|null>;
}
export { ListTaskRepository }