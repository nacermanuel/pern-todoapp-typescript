interface TaskEntity{
    id: string;
    name: string;
    description: string;
    userId: string;
    date: object;
    complete: boolean;
}

export { type TaskEntity }