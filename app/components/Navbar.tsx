"use client"

import { useState } from "react"
import { Menu, X, User } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"
import DuckSenseIcon from '../assets/SVG/icon.svg'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Don't show navbar on dashboard pages
  if (pathname.startsWith("/user/dashboard")) {
    return null
  }
  
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect()
  }

  const handleLogout = () => {
    logout({ 
        logoutParams: {
          returnTo: window.location.origin
        }
      })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <DuckSenseIcon className="w-10 h-10" />
              <span className="text-xl font-bold text-blue-600">DuckSense</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Sign in
                </button>
                <button
                  onClick={handleLogin}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Try for Free
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
          <Link
            href="#features"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
          >
            Contact
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Sign in
                </button>
                <button
                  onClick={handleLogin}
                  className="block w-full px-3 py-2 mt-1 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md text-center"
                >
                  Try for Free
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar