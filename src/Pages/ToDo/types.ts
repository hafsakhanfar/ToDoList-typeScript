export interface ToDo {
  id: string;
  task: string;
  assignee: string;
  isDone: boolean;
}

export interface Input {
  task: string;
  assignee: string;
}
