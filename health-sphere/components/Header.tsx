"use client"

import Link from "next/link"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          HealthSphere
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/appointment" className="hover:text-gray-300">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link href="/find-doctor" className="hover:text-gray-300">
                Find Doctor
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link href="/patient-records" className="hover:text-gray-300">
                    My Records
                  </Link>
                </li>
                <li>
                  <span className="hover:text-gray-300">{user.name}</span>
                </li>
                <li>
                  <Button onClick={logout} variant="destructive">
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="hover:text-gray-300">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-gray-300">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

