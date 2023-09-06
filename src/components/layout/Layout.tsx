import { Header } from 'components/header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <main
        style={{
          maxWidth: '780px',
          margin: '0 auto',
        }}
      >
        {<Outlet />}
      </main>
    </>
  );
};
