import { createContext, useEffect, useState } from "react";
import { signup, login, logout } from "../services/auth.service";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  // load saved login state
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuth(true);
  }, []);

  // SIGNUP
  const handleSignup = async (email, password) => {
    try {
      await signup(email, password);
      alert("Signup successful. Please login.");
      return true;
    } catch (err) {
      alert(err?.response?.data?.error?.message || "Signup failed");
      return false;
    }
  };

  // LOGIN
  const handleLogin = async (email, password) => {
    try {
      const res = await login(email, password);

      localStorage.setItem("token", res.data.idToken);
      localStorage.setItem("userEmail", res.data.email);

      setIsAuth(true);
      return true;
    } catch (err) {
      alert(err?.response?.data?.error?.message || "Login failed");
      return false;
    }
  };

  // LOGOUT
  const handleLogout = () => {
    logout();
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        signup: handleSignup,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
