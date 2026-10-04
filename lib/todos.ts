import type { Todo } from '@/types/todo';

export const todos: Todo[] = [
  {
  id: 26,
  title: 'mengerjakan tugas praktikum 7',
  description: 'Mengerjakan tugas praktikum 7.',
  completed: false,
  createdAt: '2026-09-29',
},
{
  id: 27,
  title: 'merangkum materi 7',
  description: 'Merangkum materi praktikum 7.',
  completed: false,
  createdAt: '2026-09-29',
},
];

export async function getTodos(): Promise<Todo[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return todos;
}

export async function getTodoDetail(
  id: string | number
): Promise<Todo | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const todo = todos.find((item) => item.id === Number(id));

  return todo ?? null;
}