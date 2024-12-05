import { signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogOut = () => {


    signOut(auth);
}


  const authInfo = {
    user,
    setUser,
    handleLogOut
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;