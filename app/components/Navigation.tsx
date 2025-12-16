"use client";

import { auth } from "@/lib/auth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth-actions";
import { MdHotelClass, MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

type Session = typeof auth.$Infer.Session;

export default function Navigation({ session }: { session: Session | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const user = session?.user;
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(`${path}/`);

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth");
    setOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <MdHotelClass />
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-red-300 text-transparent bg-clip-text">
              Bookora
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink href="/" active={isActive("/")}>
              Home
            </NavLink>

            {session ? (
              <>
                <NavLink href="/hotels" active={isActive("/hotels")}>
                  Hotel
                </NavLink>
                <NavLink href="/flights" active={isActive("/flights")}>
                  Flight
                </NavLink>
                <NavLink href="/attraction" active={isActive("/attraction")}>
                  Attraction
                </NavLink>

                <div className="flex items-center space-x-3 ml-4">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/images/profile.jpg"
                    alt="profile"
                  />
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-gray-500">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="ml-3 px-3 py-2 text-gray-600 text-sm border rounded-md hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <NavLink href="/auth" active={false}>
                Sign In
              </NavLink>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-700"
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <MobileLink href="/" onClick={() => setOpen(false)}>
            Home
          </MobileLink>

          {session ? (
            <>
              <MobileLink href="/hotels" onClick={() => setOpen(false)}>
                Hotel
              </MobileLink>
              <MobileLink href="/flights" onClick={() => setOpen(false)}>
                Flight
              </MobileLink>
              <MobileLink href="/attraction" onClick={() => setOpen(false)}>
                Attraction
              </MobileLink>

              <div className="pt-4 border-t">
                <img
                  className="h-10 w-10 rounded-full"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <p className="text-sm mt-1 font-medium text-gray-600">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-600">{user?.email}</p>
                <button
                  onClick={handleSignOut}
                  className="mt-3 w-full px-3 py-2 shadow-sm rounded-md text-gray-600 text-sm"
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <MobileLink href="/auth" onClick={() => setOpen(false)}>
              Sign In
            </MobileLink>
          )}
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? "text-indigo-600 bg-indigo-50"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
    >
      {children}
    </Link>
  );
}
