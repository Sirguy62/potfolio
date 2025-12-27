export type Task = {
  id: string;
  title: string;
  priority: number; // 0 | 1 | 2
  description?: string | null;
  dueDate?: Date | null;
};
