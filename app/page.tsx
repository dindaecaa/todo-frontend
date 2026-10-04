import TodoStateOnlyApp from './components/TodoStateOnlyApp';
import { getTodos } from '@/lib/todos';

export default async function TodoPage() {
  const initialTodos = await getTodos();

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        
        {/* Header */}
        <div className="text-center mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Daftar Tugas (Todo List)
          </h1>
        </div>

        <TodoStateOnlyApp initialTodos={initialTodos} />

      </div>
    </main>
  );
}