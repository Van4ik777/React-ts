export interface Todo {
    id: number;
    title: string;
    text: string;
    date: Date| null;
    isCompleted: boolean;
    userId: number;
}