import { Layout } from 'components/layout/Layout';
import HostDashboard from 'pages/host/HostDashboard';
import { HostIncome } from 'pages/host/HostIncome';
import { HostLayout } from 'pages/host/HostLayout';
import { HostReviews } from 'pages/host/HostReviews';
import { HostVanDetails } from 'pages/host/HostVanDetails';
import { HostVanLayout } from 'pages/host/HostVanLayout';
import { HostVanPhotos } from 'pages/host/HostVanPhotos';
import { HostVanPricing } from 'pages/host/HostVanPricing';
import { HostVans } from 'pages/host/HostVans';
import { NoutFound } from 'pages/notFound/NoutFound';
import { VanDetails } from 'pages/vanDetails/VanDetails';
import { VansList, loader as VansLoader } from 'pages/vans/VansList';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import './server';

const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='host' element={<HostLayout />}>
          <Route index element={<HostDashboard />} />
          <Route path='income' element={<HostIncome />} />
          <Route path='vans' element={<HostVans />}/>
          <Route path='vans/:id' element={<HostVanLayout />}>
            <Route index element={<HostVanDetails />} />
            <Route path='pricing' element={<HostVanPricing />} />
            <Route path='photos' element={<HostVanPhotos />} />
          </Route>
          <Route path='reviews' element={<HostReviews />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='vans' element={<VansList />} loader={VansLoader}/>
        <Route path='vans/:id' element={<VanDetails />} />
        <Route path='*' element={<NoutFound />} />
      </Route>
))

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
