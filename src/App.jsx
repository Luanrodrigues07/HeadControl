import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Pages/Login/Login'
import Home from './components/Pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App
