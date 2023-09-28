import { Container, ListItem, OrderedList, Text } from "@chakra-ui/react";

export default function Upcoming(){
    return(
        <>
            <Container display="flex" flexDirection='column' alignItems="left" margin='0' border="1px solid gray" padding='20px'>
                <Text color='crimson' as="i" fontSize="lg">Upcoming things for the site</Text>
                <OrderedList paddingBottom="20px">
                    <ListItem>
                        a page for all my music
                    </ListItem>
                    <ListItem>
                        a page for all the photographs i have clicked
                    </ListItem>
                    <ListItem>
                         potentially a page for some funny memes
                    </ListItem>
                </OrderedList>
            </Container>
        </>
    )
}