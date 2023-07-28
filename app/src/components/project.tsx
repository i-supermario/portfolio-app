import { Divider, GridItem, Image, Text } from "@chakra-ui/react";

interface propsI{
    projectName: string
    projectDescription: string
    projectImageUrl?: string 
}

export default function Project(props:propsI){
    return(
        <>
            <GridItem>
                <Text as="b" fontSize="3xl">{props.projectName}</Text>
                <Divider/>
                <Text as="i" >Description</Text>
                <Text as="samp" noOfLines={3}>{props.projectDescription}</Text>
            </GridItem>
            <GridItem>
                <Image src={props.projectImageUrl} />
            </GridItem>
        </>
    )
}