import { Divider, GridItem, Image, Link, Text, grid } from "@chakra-ui/react";

interface ProjectI{
    Name: string
    Description: string
    WebsiteUrl : string
    ImageUrl?: string 
}

const gridStyle = {
    display:"flex",
    flexDirection:"column",
    rowGap:"10px"
}

export default function Project(props:ProjectI){
    return(
        <>
            <GridItem sx={gridStyle} >
                <Link href={props.WebsiteUrl} textDecoration={"none"}><Text as="b" fontSize="3xl">{props.Name}</Text></Link>
                <Divider borderColor="skyblue" />
                <Text as="i" noOfLines={5} >Description:</Text>
                <Text as="samp" noOfLines={10}>{props.Description}</Text>
            </GridItem>
            <GridItem>
                <Image width={"xl"} src={props.ImageUrl} />
            </GridItem>
        </>
    )
}