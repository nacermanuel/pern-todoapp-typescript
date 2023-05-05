import { TaskEntity } from "../../../Task/domain/entities/TaskEntity";

interface ListTaskModel{
    id: string;
    tasks: object[];
    userId: string;
}

export { type ListTaskModel }