import React, { useState, useContext } from "react";
import { 
  Input,
  InputRightElement,
  Center,
  Flex,
  InputGroup,
  Button,
  useColorMode 
} from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
import { createApi } from 'unsplash-js';
import { PicContext } from '../App';

// Unsplash API 
const unsplash = createApi({ accessKey: 'XStI319cvaDkNBHLb9dv3t3zpE8XBk-pJNA6z-RmZxI' });

export default function SearchPhotos() {
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const { pics, setPics } = useContext(PicContext);
  const [query, setQuery] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
    .getPhotos({
      query: query
    })
    .then((data) => {

      setPics(() => {
        return data.response.results
      });

      // Edit user
      fetch('http://localhost:3000/edit-user/1', {  
        method: 'GET'
      }).then((response) => 
        console.log(response)
      );

      // Update user with the search result
      fetch('http://localhost:3000/update-user/1', {  
        method: 'PUT', 
        body: JSON.stringify(data.response.results),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then((response) => 
        console.log(response)
      );

      
    });
  }

    return (
        <>
        <header>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </header>
        <Flex w='100%' h='50%' align='center' justify='center' marginTop='5vh'>
          <Center w='60%' h='50%'>
                <InputGroup>
                  <InputRightElement
                    className="InputRight"
                    pointerEvents="cursor"
                    children={<SearchIcon className="SearchIcon" color="gray.300" />}
                    size="sm"
                    onClick={searchPhotos}
                  />

                  <Input 
                  id='query' 
                  name="query" 
                  borderRadius='10px'
                  className="Input" 
                  variant="outline" 
                  size="sm" 
                  h='5vh'
                  placeholder={`Search knowledge`}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)} />
                </InputGroup>
            </Center>
        </Flex>
        </>
      );
}
