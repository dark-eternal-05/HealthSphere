"use client"

import { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function PrivateRoute({ component: Component, ...rest }) {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      }
    />
  )
}

export default PrivateRoute

