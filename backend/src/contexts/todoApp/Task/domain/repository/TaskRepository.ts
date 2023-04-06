import { TaskEntity } from "../entities/TaskEntity";

interface TaskRepository{
    create(task: TaskEntity): Promise<TaskEntity> ;
}