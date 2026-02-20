import { BrowserRouter , Route , Routes } from "react-router"
//this shd be commented - import Navbar from "./components/Navbar" 
import AppLayout from "./layouts/AppLayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {
//navbar is not a route component ,so it shd not be inside routes
//navbar shd not be inside browserroutes as well because it rerenders the entire page (it shd only rerender the below part of profile,dashboard,login options)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/profile" element={<Profile />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App