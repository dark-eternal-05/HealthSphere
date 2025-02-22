import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Web3ReactProvider } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"
import { AuthProvider } from "./context/AuthContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Appointment from "./pages/Appointment"
import DoctorOnCall from "./pages/DoctorOnCall"
import FindDoctor from "./pages/FindDoctor"
import PatientRecords from "./pages/PatientRecords"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PrivateRoute from "./components/PrivateRoute"

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/appointment" component={Appointment} />
                <Route path="/doctor-on-call" component={DoctorOnCall} />
                <Route path="/find-doctor" component={FindDoctor} />
                <PrivateRoute path="/patient-records" component={PatientRecords} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </Web3ReactProvider>
  )
}

export default App

