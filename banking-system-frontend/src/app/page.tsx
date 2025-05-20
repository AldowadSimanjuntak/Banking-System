import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Modern Banking System
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A secure and efficient banking solution built with cutting-edge technology
          </p>

          {/* Tech Stack Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2">
                  <span className="text-xl font-bold text-blue-600">N</span>
                </div>
                <span className="text-sm text-gray-600">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2">
                  <span className="text-xl font-bold text-green-600">E</span>
                </div>
                <span className="text-sm text-gray-600">Express.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2">
                  <span className="text-xl font-bold text-purple-600">P</span>
                </div>
                <span className="text-sm text-gray-600">Prisma</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2">
                  <span className="text-xl font-bold text-blue-500">P</span>
                </div>
                <span className="text-sm text-gray-600">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Authentication</h3>
              <p className="text-gray-600">JWT-based authentication with password encryption</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-time Transactions</h3>
              <p className="text-gray-600">Instant transaction processing and updates</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Modern UI/UX</h3>
              <p className="text-gray-600">Responsive design with Tailwind CSS</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center border border-blue-600"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Developed by Aldowad</p>
          <p className="text-sm mt-2">© 2024 Banking System. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
