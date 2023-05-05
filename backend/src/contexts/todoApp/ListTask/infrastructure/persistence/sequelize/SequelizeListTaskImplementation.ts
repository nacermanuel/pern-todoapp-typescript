import { ListTaskModel } from "../../../domian/model/ListTaskModel";
import { ListTaskRepository } from "../../../domian/repository/ListTaskRepository";
import { SequelizeListTaskModel } from "./SequelizeListTaskModel";

class SequelizeListTaskImplementation implements ListTaskRepository{
    async createListTask(listTask: ListTaskModel): Promise<ListTaskModel | null> {
        const newListTask = new SequelizeListTaskModel(listTask)

        try{
            await newListTask.save()
        }catch(e){
            throw new Error(`ListTaskImplementation Error: ${e}`)
            //console.log(`ListTaskImplementation Error: ${e}`);
            //return null
        }
        return newListTask
    }
    async findByUserId(id: string): Promise<ListTaskModel | null> {
        const findList = await SequelizeListTaskModel.findOne({ where: { userId: id } })

        return findList
    }
}
export {SequelizeListTaskImplementation}