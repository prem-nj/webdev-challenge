import React, {  createContext } from "react";

export const datacontext = createContext();
const serverUrl="http://localhost:3000"
const value={
  serverUrl
}

function UserContext({children}){
  return(
<datacontext.Provider value={value}>

  {children}

</datacontext.Provider>
   
  )
}

export default UserContext;