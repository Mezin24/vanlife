import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import './server';
import { VansList } from 'pages/vans/VansList';
import { VanDetails } from 'pages/vanDetails/VanDetails';
import { Layout } from 'components/layout/Layout';
import { HostLayout } from 'pages/host/HostLayout';
import { HostIncome } from 'pages/host/HostIncome';
import { HostReviews } from 'pages/host/HostReviews';
import HostDashboard from 'pages/host/HostDashboard';
import { HostVans } from 'pages/host/HostVans';
import { HostVanDetails } from 'pages/host/HostVanDetails';
import { HostVanPricing } from 'pages/host/HostVanPricing';
import { HostVanPhotos } from 'pages/host/HostVanPhotos';
import { HostVanLayout } from 'pages/host/HostVanLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path='income' element={<HostIncome />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanLayout />}>
              <Route index element={<HostVanDetails />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
            <Route path='reviews' element={<HostReviews />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='vans' element={<VansList />} />
          <Route path='vans/:id' element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
