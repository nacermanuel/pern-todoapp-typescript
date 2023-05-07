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

    async updateListTask(id:string, tasks:object[]): Promise<boolean | null> {
        const affectedCount = await SequelizeListTaskModel.update({ tasks: tasks },{where:{userId:id}})
        
        if(affectedCount[0] === 1){
            return true
        }else{
            console.log(`en implementation updatedListTask es:`)
            console.log(affectedCount);
            return null
        }
    }
}
export {SequelizeListTaskImplementation}