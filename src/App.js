import './App.css';
import React, { createContext, useState } from "react";
import SearchPhotos from "./components/SearchPhotos";
import { ChakraProvider, theme } from "@chakra-ui/react";
import PaginatedItems from "./components/PaginatedItems";
  
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
        <PaginatedItems itemsPerPage={9} />
      </PicContext.Provider>
    </ChakraProvider>
  );
}

export default App;
