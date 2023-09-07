import { NavLink, Outlet } from 'react-router-dom';
import { linkStyles } from 'utils/helpers/linkStyles';

export const HostLayout = () => {
  return (
    <>
      <nav className='host-nav'>
        <NavLink to={'.'} style={linkStyles} end>
          Dashboard
        </NavLink>
        <NavLink to={'income'} style={linkStyles}>
          Income
        </NavLink>
        <NavLink to={'vans'} style={linkStyles}>
          Vans
        </NavLink>
        <NavLink to={'reviews'} style={linkStyles}>
          Reviews
        </NavLink>
      </nav>
      {<Outlet />}
    </>
  );
};
