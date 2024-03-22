import { AccordionButton, AccordionItem, AccordionPanel, Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

interface AppProps{
    CompanyName : string
    position : string
    from : string
    to : string
    description : string
}

export default function Experience(props: AppProps){
    const points = props.description.split(";")

    return(
        <>
            <AccordionItem border="0" _selected={{border:"0"}}>
                <AccordionButton >
                    <Flex direction={{base:'column',sm:'row'}} width="inherit" justifyContent="space-between">
                        <Box>
                            <Text textAlign={{base:"center", sm:"start"}}>{props.CompanyName}</Text>
                            <Text>{props.position}</Text>
                        </Box>
                        <Text>{props.from} - {props.to}</Text>
                    </Flex>
                </AccordionButton>
                <AccordionPanel>
                    <UnorderedList>
                        {
                            points.map(point => <ListItem>{point}</ListItem>)
                        }
                    </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
        </>
    )

}