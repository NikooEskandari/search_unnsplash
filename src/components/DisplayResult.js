import { React } from "react";
import { 
    Stack, 
    Box,
    Flex,
    Center,
    SimpleGrid
  } from '@chakra-ui/react';
  import Card from "react-bootstrap/Card";

export default function DisplayResult (props) {

    return (
        <Flex w='100%' h='50%' align='center' justify='center' marginTop='5vh'>
          <Center w='80%' h='100%'>
            <Stack direction={['column', 'row']} spacing='24px' marginTop='5vh'>
                <SimpleGrid columns={3} spacing={10}>
                    {props.pics &&
                        props.pics.map(function (pic) {
                            return (
                                <Box w='20vw' h="auto" key={pic.id}>
                                    <Card className="card" key={pic.id}>
                                        <Card.Img 
                                        variant="top" 
                                        src={pic.urls.full} 
                                        className='cardImage'
                                        key={pic.id}
                                        />
                                        
                                        <Card.Body>
                                            <Card.Text>
                                                {pic.alt_description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Box>
                            );
                        })
                    }
                </SimpleGrid>
            </Stack>  
           </Center>
        </Flex>
    );
}   