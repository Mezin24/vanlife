import { Error } from 'components/error/Error';
import { Layout } from 'components/layout/Layout';
import HostDashboard from 'pages/host/HostDashboard';
import { HostIncome } from 'pages/host/HostIncome';
import { HostLayout } from 'pages/host/HostLayout';
import { HostReviews } from 'pages/host/HostReviews';
import { HostVanDetails } from 'pages/host/HostVanDetails';
import {
  HostVanLayout,
  loader as HostVanLayoutLoader,
} from 'pages/host/HostVanLayout';
import { HostVanPhotos } from 'pages/host/HostVanPhotos';
import { HostVanPricing } from 'pages/host/HostVanPricing';
import { HostVans, loader as HostVanLoader } from 'pages/host/HostVans';
import {
  Login,
  loader as loginLoader,
  action as loginAction,
} from 'pages/login/Login';
import { NoutFound } from 'pages/notFound/NoutFound';
import {
  VanDetails,
  loader as VanDetailsLoader,
} from 'pages/vanDetails/VanDetails';
import { VansList, loader as VansLoader } from 'pages/vans/VansList';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import './server';
import { requireAuth } from 'utils/helpers/requireAuth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path='login'
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path='host' element={<HostLayout />}>
        <Route
          index
          element={<HostDashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path='income'
          element={<HostIncome />}
          loader={async () => await requireAuth()}
        />
        <Route
          path='reviews'
          element={<HostReviews />}
          loader={async () => await requireAuth()}
        />
        <Route path='vans' element={<HostVans />} loader={HostVanLoader} />
        <Route
          path='vans/:id'
          element={<HostVanLayout />}
          loader={HostVanLayoutLoader}
        >
          <Route
            index
            element={<HostVanDetails />}
            loader={async () => await requireAuth()}
          />
          <Route
            path='pricing'
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path='photos'
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        element={<VansList />}
        loader={VansLoader}
        errorElement={<Error />}
      />
      <Route
        path='vans/:id'
        element={<VanDetails />}
        loader={VanDetailsLoader}
        errorElement={<Error />}
      />
      <Route path='*' element={<NoutFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
