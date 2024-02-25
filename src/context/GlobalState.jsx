import { createContext, useState } from "react";

export const StateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [location, setLocation] = useState({ cityName: "", lat: 0, lon: 0 });

  return (
    <StateContext.Provider
      value={{
        location,
        setLocation,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
