"use client";

import { auth } from "@/lib/auth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth-actions";
import { MdHotelClass } from "react-icons/md";

type Session = typeof auth.$Infer.Session;

export default function Navigation({ session }: { session: Session | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const user = session?.user;

  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth");
  };

  return (
    <header className="bg-white backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <MdHotelClass />
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-red-300 text-transparent bg-clip-text">
              Bookora
            </span>
          </Link>

          <nav className="flex items-center space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </Link>

            {session && (
              <div className="flex justify-center space-x-4">
                <Link
                  href="/hotels"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/hotels")
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Hotel
                </Link>
                <Link
                  href="/flights"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/flights")
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Flight
                </Link>
                <Link
                  href="/profile"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/profile")
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Profile
                </Link>
                <div className="flex  justify-center items-start ">
                  <div className="flex items-center space-x-3">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="/images/profile.jpg"
                    />

                    <div className="text-sm">
                      <p className="text-gray-900 font-medium">{user?.name}</p>
                      <p className="text-gray-500">{user?.email}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleSignOut}
                    className="ml-4 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}

            {!session && (
              <Link
                href="/auth"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
