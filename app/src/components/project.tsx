import { Divider, GridItem, Image, Link, Text,UnorderedList, ListItem } from "@chakra-ui/react";

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
    const points = props.Description.split(";")
    return(
        <>
            <GridItem sx={gridStyle} >
                <Link href={props.WebsiteUrl} textDecoration={"none"}><Text as="b" fontSize="3xl">{props.Name}</Text></Link>
                <Divider borderColor="skyblue" />
                <Text as="i">Description:</Text>
                <UnorderedList>
                        {
                            points.map(point => <ListItem>{point}</ListItem>)
                        }
                    </UnorderedList>
            </GridItem>
            <GridItem paddingTop="40px">
                <Image width={"xl"} src={props.ImageUrl} />
            </GridItem>
        </>
    )
}