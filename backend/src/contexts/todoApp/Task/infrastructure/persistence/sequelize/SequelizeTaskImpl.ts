import { TaskEntity } from "../../../domain/entities/TaskEntity";
import { TaskRepository } from "../../../domain/repository/TaskRepository";
import { SequelizeTaskModel } from "./SequelizeTaskModel";

class SequelizeTaskImpl implements TaskRepository{
    async create(task: TaskEntity): Promise<TaskEntity>{
        const newTask = new SequelizeTaskModel(task)
        await newTask.save()
        return newTask
    }

    async getTaskbyUserId(userId: string){
        const tasks = await SequelizeTaskModel.findAll( { where: { userId: userId} } )
        return tasks
    }
}

export { SequelizeTaskImpl } ;