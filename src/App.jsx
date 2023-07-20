import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Pages/Login/Login'
import Home from './components/Pages/Home/Home'
import Equipament from './components/Pages/esquipaments/Equipament'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="Equipaments" element={<Equipament />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
