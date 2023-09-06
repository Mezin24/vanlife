import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import './server';
import { VansList } from 'pages/vans/VansList';
import { VanDetails } from 'pages/vanDetails/VanDetails';
import { Layout } from 'components/layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<VansList />} />
          <Route path='/vans/:id' element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
