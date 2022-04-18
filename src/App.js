import './App.css';
import React, { createContext, useState } from "react";
import SearchPhotos from "./components/SearchPhotos";
import { ChakraProvider, theme } from "@chakra-ui/react";
  
export const PicContext = createContext({
  pics: [],
  setPics: () => {}
});

function App() {
  const [pics, setPics] = useState([]);
  const value = { pics, setPics };

  return (
    <ChakraProvider theme={theme}>
      <PicContext.Provider value={value}>
        <div className="App">
          <div className="container">
              <SearchPhotos />
          </div>
        </div>
      </PicContext.Provider>
    </ChakraProvider>
  );
}

export default App;
