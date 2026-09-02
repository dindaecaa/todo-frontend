import { apiClient } from './api';

import type {
  ApiTodo,
  TodosApiResponse,
} from '@/types/api-todo';


export interface FetchTodosParams {
  limit?: number;
  skip?: number;
}


export interface CreateTodoInput {
  todo: string;
  completed: boolean;
  userId: number;
}


export const todoService = {

  // GET semua todo
  async fetchTodos(
    params: FetchTodosParams = {}
  ): Promise<TodosApiResponse> {

    const {
      limit = 15,
      skip = 0,
    } = params;

    return apiClient<TodosApiResponse>(
      `/todos?limit=${limit}&skip=${skip}`
    );
  },


  // GET satu todo berdasarkan ID
  async fetchTodoById(
    id: number | string
  ): Promise<ApiTodo> {

    return apiClient<ApiTodo>(
      `/todos/${id}`
    );
  },


  // POST todo
  async createTodo(
    payload: CreateTodoInput
  ): Promise<ApiTodo> {

    return apiClient<ApiTodo>(
      '/todos/add',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );
  },


  // UPDATE status todo
  async updateTodoStatus(
    id: number | string,
    completed: boolean
  ): Promise<ApiTodo> {

    return apiClient<ApiTodo>(
      `/todos/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          completed,
        }),
      }
    );
  },


  // DELETE todo
  async deleteTodo(
    id: number | string
  ) {

    return apiClient<{
      id: number;
      isDeleted: boolean;
      deletedOn: string;
    }>(
      `/todos/${id}`,
      {
        method: 'DELETE',
      }
    );
  },
};