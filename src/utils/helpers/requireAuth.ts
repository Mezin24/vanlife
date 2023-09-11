import { redirect } from 'react-router-dom';
import { Local_Storage_auth_key } from 'utils/localStorage/localStorage';

export async function requireAuth() {
  const isLoggedIn = JSON.parse(
    localStorage.getItem(Local_Storage_auth_key) || ''
  );

  if (!isLoggedIn) {
    const response = redirect('/login?message=You+must+login+first');
    // @ts-ignore
    response.body = true;
    return response;
  }
  return null;
}
