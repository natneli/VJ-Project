import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(/* your initial user data */);

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
