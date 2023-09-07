import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='site-wrapper'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
