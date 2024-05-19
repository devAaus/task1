import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {

   return (
      <div className="bg-[#000814]">
         <main className="min-h-screen max-w-screen-xl mx-auto text-[#e5e5e5]">
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         </main>
      </div>
   )
}

export default App
