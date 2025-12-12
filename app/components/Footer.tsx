import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Better-Auth Demo</h3>
          <p className="text-gray-400 mb-6">
            A demonstration of modern authentication patterns and best practices
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
             Profile
            </Link>
            <Link
              href="/hotels"
              className="text-gray-400 hover:text-white transition-colors"
            >
            Hotel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
