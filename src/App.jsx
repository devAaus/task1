import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AddBlog from "./pages/AddBlog"

function App() {

   return (
      <div className="bg-bg">
         <main className="min-h-screen max-w-screen-sm mx-auto text-text">
            <Navbar />

            <div className="py-6 px-8">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add-blog" element={<AddBlog />} />
               </Routes>
            </div>
         </main>
      </div>
   )
}

export default App
