import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import './server';
import { VansList } from 'pages/vans/VansList';
import { VanDetails } from 'pages/vanDetails/VanDetails';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to='/'>
          #vanlife
        </Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <main
        style={{
          maxWidth: '780px',
          margin: '0 auto',
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<VansList />} />
          <Route path='/vans/:id' element={<VanDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
