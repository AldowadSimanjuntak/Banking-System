import Cookies from 'js-cookie';

const TOKEN_KEY = 'token';

export const setToken = (token: string) => {
  // Set token in cookie with secure and httpOnly flags
  Cookies.set(TOKEN_KEY, token, {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: 7, // 7 days
  });
};

export const getToken = () => {
  return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const isAuthenticated = () => {
  return !!getToken();
}; 