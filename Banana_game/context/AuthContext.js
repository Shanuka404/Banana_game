import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Null if not logged in

  useEffect(() => {
    // Simulate fetching the logged-in user (replace this with real logic)
    const checkUser = async () => {
      const loggedInUser = await fetchLoggedInUser(); // Your logic
      setUser(loggedInUser); // e.g., { id: 1, name: "Devinda" } or null
    };

    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
