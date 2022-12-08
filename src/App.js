import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Link } from "react-router-dom"

// import page comoponent
import SearchPage from "./pages/SearchPage"
import SingleDog from "./pages/SingleDog"
import Profile from './pages/Profile';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import './App.css'
import Logo from './assets/logo.png';
import Article from "./pages/Article";
import DetailArticle1 from "./pages/DetailArticle/DetailArticle1";
import DetailArticle2 from "./pages/DetailArticle/DetailArticle2";
import DetailArticle3 from "./pages/DetailArticle/DetailArticle3";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className='py-3 mb-12 border-b'>
          <div className='container mx-auto flex justify-between items-center'>
            <Link to={"/"}>
              <img src={Logo} alt='' />
            </Link>
          </div>
        </header>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path='/detailarticle1' element={<DetailArticle1 />} />
          <Route path='/detailarticle2' element={<DetailArticle2 />} />
          <Route path='/detailarticle3' element={<DetailArticle3 />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/:name" element={<SingleDog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App