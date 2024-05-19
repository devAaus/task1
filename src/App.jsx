import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
import AddBlog from "./pages/AddBlog"

function App() {

   return (
      <div className="bg-bg">
         <main className="min-h-screen max-w-screen-md mx-auto text-text">
            <Navbar />

            <div className="py-6 px-8">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/add-blog" element={<AddBlog />} />
               </Routes>
            </div>
         </main>
      </div>
   )
}

export default App
