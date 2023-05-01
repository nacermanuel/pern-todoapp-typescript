interface TaskEntity{
    id: string;
    name: string;
    description: string;
    userId: string;
    date: string;
    complete: boolean;
}

export { type TaskEntity }