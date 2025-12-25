export type Task = {
  id: string;
  title: string;
  priority: number;
  description?: string | null;
  dueDate?: Date | null;
};
