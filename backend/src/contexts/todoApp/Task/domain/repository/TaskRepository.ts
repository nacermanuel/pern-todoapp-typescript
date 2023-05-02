import { TaskEntity } from "../entities/TaskEntity";

interface TaskRepository{
    create(task: TaskEntity): Promise<TaskEntity | null> ;
    getTaskbyUserId(userId: string): Promise<TaskEntity[]> ;
    eliminatetask(taskid: string): Promise<void> ;
    updateTask(task: TaskEntity): Promise<boolean|null> ;
}

export {TaskRepository};