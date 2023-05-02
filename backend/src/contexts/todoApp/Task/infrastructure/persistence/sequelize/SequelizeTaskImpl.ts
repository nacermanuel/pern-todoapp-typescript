import { TaskEntity } from "../../../domain/entities/TaskEntity";
import { TaskRepository } from "../../../domain/repository/TaskRepository";
import { SequelizeTaskModel } from "./SequelizeTaskModel";

class SequelizeTaskImpl implements TaskRepository{
    async create(task: TaskEntity): Promise<TaskEntity | null >{
        const newTask = new SequelizeTaskModel(task)
        try{
            await newTask.save()
        }catch(error){
            console.log(error)
            return null
        }
        return newTask
    }

    async getTaskbyUserId(userId: string){
        const tasks = await SequelizeTaskModel.findAll( { where: { userId: userId} } )
        return tasks
    }

    async eliminatetask(taskid: string): Promise<void> {
        const task = await SequelizeTaskModel.destroy({where:{id:taskid}})
    }

    async updateTask(task: TaskEntity): Promise<boolean|null> {
        const affectedCount = await SequelizeTaskModel.update(task,{where: { id: task.id }})

        if(affectedCount[0] === 1){
            return true
        }else{
            console.log(`en implementation updatedTask es:`)
            console.log(affectedCount);
            return null
        }
        
         

    }

}

export { SequelizeTaskImpl } ;