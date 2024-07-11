import React from "react";
import UserContext from "./userContext.js";

//This children is a generic name of the props,components that we are going to pass
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    //In the UserContext.Provider we are providing the values in form of object, these values passed will be accessible inside any props or component
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
