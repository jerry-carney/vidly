import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt); //browser
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt); // returns current user object
  } catch (ex) {
    return null; // no current user
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function getUserIcon() {
  const STANDARD_USER_ICON = "fa fa-user";
  const ADMINISTRATOR_ICON = "fa fa-user-plus";

  const user = getCurrentUser();
  if (!user) {
    return null;
  } else if (user.isAdmin) {
    return ADMINISTRATOR_ICON;
  } else {
    return STANDARD_USER_ICON;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  getUserIcon
};
