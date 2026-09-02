'use client';

import React from 'react';
import type { Todo } from '@/types/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete?: (id: number) => void;
};

export default function TodoItem({
  todo,
  onToggle,
}: TodoItemProps) {
  return (
    <li
      className={`flex items-center gap-4 p-5 rounded-lg border transition ${
        todo.completed
          ? 'bg-green-50 border-green-200'
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-6 h-6 accent-indigo-500 cursor-pointer shrink-0"
      />

      {/* Judul */}
      <span
        className={`flex-1 text-xl ${
          todo.completed
            ? 'text-gray-400 line-through'
            : 'text-gray-800'
        }`}
      >
        {todo.title}
      </span>

      {/* Detail */}
      <button
        type="button"
        className="text-indigo-600 text-lg hover:text-indigo-800 cursor-pointer"
      >
        Detail
      </button>
    </li>
  );
}