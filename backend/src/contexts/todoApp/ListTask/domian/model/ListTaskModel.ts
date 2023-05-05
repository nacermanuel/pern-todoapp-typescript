import { TaskEntity } from "../../../Task/domain/entities/TaskEntity";

interface ListTaskModel{
    id: string;
    tasks: TaskEntity[];
    userId: string;
}

export { type ListTaskModel }