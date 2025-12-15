import Link from "next/link";
import Nearby from "./components/Nearby";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
            Bookora
            <span className="block text-indigo-600 mt-2">
              Your Travel Starts Here
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Search and book the best hotels, secure affordable flights, and
            discover unforgettable events all with one easy to use platform.
          </p>

          <div className="flex items-center flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/profile"
              className="inline-flex items-center px-6 py-3 border border-transparent text-xl font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Dev profile
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <Nearby />
        </div>

        {/* Demo Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Try It Out
            </h2>
            <p className="text-lg text-gray-600">
              Experience the authentication flow with our interactive demo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Authentication Flow
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-indigo-600">
                      1
                    </span>
                  </div>
                  <span className="text-gray-700">
                    Visit the authentication page
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-indigo-600">
                      2
                    </span>
                  </div>
                  <span className="text-gray-700">
                    Choose your preferred sign-in method
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-indigo-600">
                      3
                    </span>
                  </div>
                  <span className="text-gray-700">
                    Access the protected dashboard
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Available Features
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Google OAuth integration
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    GitHub OAuth integration
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Email/password authentication
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Protected routes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">User session management</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/auth"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Start Demo
            </Link>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              About Better-Auth
            </h3>
            <p className="text-blue-800 text-lg mb-6">
              Better-Auth is a modern, flexible authentication library for
              Next.js that provides a seamless developer experience with
              built-in security and extensive customization options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://better-auth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-blue-300 text-sm font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors"
              >
                Learn More
              </a>
              <a
                href="https://github.com/next-authjs/next-auth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-blue-300 text-sm font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
