import { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import loginAvatar from 'assets/icons/avatar-icon.png';

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
        <Link to='login' className='login-link'>
          <img src={loginAvatar} className='login-icon' />
        </Link>
      </nav>
    </header>
  );
};
