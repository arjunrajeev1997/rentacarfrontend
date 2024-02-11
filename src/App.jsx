
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Cars from './Pages/Cars'
import aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Addnew from './Pages/Addnew'
import List from './Pages/List'
import Blog from './Pages/Blog'





function App() {
  useEffect(()=>{
    aos.init()
    },[])

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/cars' element={<Cars></Cars>}></Route>
        <Route path='/addnew' element={<Addnew></Addnew>}></Route>
        <Route path='/list' element={<List></List>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </>
  )
}

export default App
