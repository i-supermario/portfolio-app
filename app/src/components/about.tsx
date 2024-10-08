import { Box, Divider, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react"


export default function About(){
    return(
        <>
            <Box display="flex" flexDirection="column" rowGap="10px" padding="20px 0 20px 0">
            <Text as="samp" >a little about me  </Text>
            <Divider />
            <UnorderedList variant="">
              <ListItem>
                <Text as="samp" > Currently pursuing my MS in Computer Science at University of Southern California </Text>
              </ListItem>
              <ListItem>
                <Text as="samp" > Open for full-time opportunities, you can find my resume <Link href="https://drive.google.com/file/d/1-ojxW8Wzt3nUJle02R915KNE9iMJvgMF/view?usp=sharing" color="yellow.600" isExternal >here</Link> </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </>
    )
}