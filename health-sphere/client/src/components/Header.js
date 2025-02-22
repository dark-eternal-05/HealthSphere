"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { useWeb3React } from "@web3-react/core"
import { injected } from "../utils/connectors"
import { AuthContext } from "../context/AuthContext"

function Header() {
  const { active, account, activate, deactivate } = useWeb3React()
  const { user, logout } = useContext(AuthContext)

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          HealthSphere
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/appointment" className="hover:text-gray-300">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link to="/find-doctor" className="hover:text-gray-300">
                Find Doctor
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/patient-records" className="hover:text-gray-300">
                  My Records
                </Link>
              </li>
            )}
            {user ? (
              <>
                <li>
                  <span className="hover:text-gray-300">{user.name}</span>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-gray-300">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="hover:text-gray-300">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
            {active ? (
              <li>
                <button
                  onClick={disconnect}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Disconnect Wallet
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={connect}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Connect Wallet
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

