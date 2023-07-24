import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Pages/Login/Login'
import Home from './components/Pages/Home/Home'
import Equipament from './components/Pages/esquipaments/Equipament'
import Forms from './components/Pages/Forms/Forms'
import Profile from './components/Pages/Profile/Profile'
import Softwares from './components/Pages/Softwares/Softwares'
import Plataform from './components/Pages/Plataform/Plataform'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="Equipaments" element={<Equipament />} />
        <Route path="Forms" element={<Forms />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Softwares" element={<Softwares />} />
        <Route path="Plataform" element={<Plataform />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
