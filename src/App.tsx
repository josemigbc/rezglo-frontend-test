import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import LoginPage from "./components/login/LoginPage";

function App() {
  const [isAuth, setIsAuth] = useState(true)
  const logUserIn = () => {setIsAuth(true)}

  if (isAuth){
    return <Dashboard/>
  }
  return <LoginPage logUserIn={logUserIn} /> 

}

export default App;
