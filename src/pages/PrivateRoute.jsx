import React from "react";
import { Route, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (currentUser === null) {
    return <Navigate to="/signin" />; 
  }

  return children; 
};

export default ProtectedRoute;
