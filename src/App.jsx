import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Dashboard from "./pages/admin/Dashboard"
import AddBlog from "./pages/AddBlog"
import BlogDetail from "./pages/BlogDetail"
import Authors from "./pages/admin/Authors"
import Comments from "./pages/admin/Comments"

function App() {

   return (
      <div className="bg-bg">
         <main className="min-h-screen max-w-screen-md mx-auto text-text">
            <Navbar />

            <div className="py-6 px-8">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/add-blog" element={<AddBlog />} />



                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/dashboard/authors" element={<Authors />} />
                  <Route path="/dashboard/comments" element={<Comments />} />

               </Routes>
            </div>
         </main>
      </div>
   )
}

export default App
