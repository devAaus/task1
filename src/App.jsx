import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Dashboard from "./pages/admin/Dashboard"
import AddBlog from "./pages/AddBlog"
import BlogDetail from "./pages/BlogDetail"
import AuthorProfile from "./pages/AuthorProfile"
import UpdateBlog from "./pages/admin/UpdateBlog"
import Login from "./pages/Login"
import UpdateAuthor from "./pages/UpdateAuthor"

function App() {

   return (
      <div className="bg-bg">
         <main className="min-h-screen max-w-screen-md mx-auto text-text">
            <Navbar />

            <div className="py-6">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/add-blog" element={<AddBlog />} />
                  <Route path="/update-blog/:id" element={<UpdateBlog />} />
                  <Route path="/author/:id" element={<AuthorProfile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/update-author/:id" element={<UpdateAuthor />} />

                  <Route path="/dashboard" element={<Dashboard />} />

               </Routes>
            </div>
         </main>
      </div>
   )
}

export default App
