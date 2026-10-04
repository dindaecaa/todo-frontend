import React from 'react';
import Link from 'next/link';
import { Todo } from '@/types/todo';

type TaskDetailCardProps = {
  todo: Todo;
};

export default function TaskDetailCard({
  todo,
}: TaskDetailCardProps) {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto bg-white border border-gray-300 rounded-xl shadow-lg p-8">

        {/* Header */}
        <header className="flex items-center justify-between border-b border-gray-300 pb-5 mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Detail Tugas
          </h1>

          <Link
            href="/"
            className="text-sm bg-gray-50 hover:bg-gray-100 text-gray-600 px-4 py-2 rounded-lg border border-gray-200 transition"
          >
            ← Kembali ke Daftar
          </Link>
        </header>

        {/* Detail Tugas */}
        <div className="space-y-7">

          {/* ID Tugas */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              ID TUGAS
            </label>

            <span className="inline-block bg-purple-50 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
              #{todo.id}
            </span>
          </div>

          {/* Judul Tugas */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              JUDUL TUGAS
            </label>

            <h2 className="text-xl font-semibold text-gray-900">
              {todo.title}
            </h2>
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              STATUS
            </label>

            {todo.completed ? (
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                ✓ Selesai
              </span>
            ) : (
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                ⌛ Belum Selesai
              </span>
            )}
          </div>

          {/* Tanggal Dibuat */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              TANGGAL DIBUAT
            </label>

            <p className="text-gray-500 text-sm">
              {todo.createdAt}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}