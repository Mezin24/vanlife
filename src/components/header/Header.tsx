import { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const addNavLinkClass = useCallback(
    ({ isActive }: { isActive: boolean }) => (isActive ? 'link-active' : ''),
    []
  );
  return (
    <header>
      <Link className='site-logo' to='/'>
        #vanlife
      </Link>
      <nav>
        <NavLink to='/host' className={addNavLinkClass}>
          Host
        </NavLink>
        <NavLink to='/about' className={addNavLinkClass}>
          About
        </NavLink>
        <NavLink to='/vans' className={addNavLinkClass}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
};
