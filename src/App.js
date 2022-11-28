import { BrowserRouter, Routes, Route, } from "react-router-dom"

// import page comoponent
import SearchPage from "./pages/SearchPage"
import SingleDog from "./pages/SingleDog"
import Profile from './pages/Profile';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import './App.css'
import Logo from './assets/logo.png';

function App() {
  return (
    <>
      <header className='py-3 mb-12 border-b'>
        <div className='container mx-auto flex justify-between items-center'>
          <img src={Logo} alt='' />
        </div>
      </header>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/:name" element={<SingleDog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App