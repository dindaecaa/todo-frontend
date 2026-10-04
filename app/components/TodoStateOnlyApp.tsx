'use client';

import { useState } from 'react';
import Link from 'next/link';

type Todo = {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
};

type Props = {
  initialTodos: Todo[];
};

export default function TodoStateOnlyApp({ initialTodos }: Props) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;

    const todo: Todo = {
      id: Date.now(),
      title: newTodo,
      description: 'Tugas baru',
      completed: false,
    };

    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* Form Tambah */}
      <div className="flex gap-2 border rounded-lg p-3">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Tambahkan tugas baru..."
          className="flex-1 border rounded-md px-3 py-2 text-sm"
        />

        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Tambah
        </button>
      </div>

      {/* Daftar Tugas */}
      {todos.length === 0 ? (
        <div className="border border-dashed rounded-lg p-8 text-center">
          <p className="text-gray-500">
            Belum ada tugas.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Tambahkan tugas baru di atas untuk memulai!
          </p>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-700">
              Daftar Tugas
            </h2>

            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
              {todos.length} item
            </span>
          </div>

          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="border rounded-lg p-4 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-4 h-4"
                  />

                  <div>
                    <h3
                      className={`font-medium ${
                        todo.completed
                          ? 'line-through text-gray-400'
                          : 'text-gray-800'
                      }`}
                    >
                      {todo.title}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-2">
                  {/* DETAIL */}
                  <Link
                    href={`/task/${todo.id}`}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs px-3 py-2 rounded-md"
                  >
                    Detail →
                  </Link>

                  {/* HAPUS */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-2 rounded-md"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}