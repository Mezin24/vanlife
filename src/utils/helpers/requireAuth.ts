import { redirect } from 'react-router-dom';

export const requireAuth = async () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return redirect('/login');
  }
  return null;
};
