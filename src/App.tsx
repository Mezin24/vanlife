import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"

const App = () => {
  return (
    <BrowserRouter>
    <header>
      <Link className="site-logo" to='/'>#vanlife</Link>
      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  )
}
export default App