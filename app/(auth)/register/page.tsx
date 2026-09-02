import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Register
          </h1>

          <p className="mt-2 text-gray-500">
            Buat akun baru kamu
          </p>
        </div>

        {/* Form Register */}
        <RegisterForm />

        {/* Link ke Login */}
        <div className="mt-6 pt-4 border-t text-center">
          <p className="text-sm text-gray-500">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login di sini
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}