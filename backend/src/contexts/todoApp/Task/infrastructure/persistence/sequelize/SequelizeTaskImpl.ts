import { TaskEntity } from "../../../domain/entities/TaskEntity";
import { SequelizeTaskModel } from "./SequelizeTaskModel";

class SequelizeTaskImpl {
    async create(task: TaskEntity): Promise<TaskEntity>{
        const newTask = new SequelizeTaskModel(task)
        await newTask.save()
        return newTask
    }
}

export { SequelizeTaskImpl } ;