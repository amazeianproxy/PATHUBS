"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  signedUp: boolean;
  setSignedUp: (value: boolean) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [signedUp, setSignedUpState] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSignedUpState(localStorage.getItem("signedUp") === "true");
    }
  }, []);

  const setSignedUp = (value: boolean) => {
    setSignedUpState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("signedUp", value.toString());
    }
  };

  const signOut = () => {
    setSignedUpState(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("signedUp");
    }
  };

  return (
    <AuthContext.Provider value={{ signedUp, setSignedUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
