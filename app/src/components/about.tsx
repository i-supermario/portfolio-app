import { Box, Divider, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react"


export default function About(){
    return(
        <>
            <Box display="flex" flexDirection="column" rowGap="10px" padding="20px 0 20px 0">
            <Text as="samp" >a little about me  </Text>
            <Divider />
            <UnorderedList variant="">
              <ListItem>
                <Text as="samp" > Currently pursuing my Masters in Computer Science at University of Southern California </Text>
              </ListItem>
              <ListItem>
                <Text as="samp" > Open for full-time opportunities, you can find my resume <Link href="https://drive.google.com/file/d/1-ojxW8Wzt3nUJle02R915KNE9iMJvgMF/view?usp=sharing" color="yellow.600" isExternal >here</Link> </Text>
              </ListItem>
              <ListItem>
                <Text as="samp" > I love playing, watching and discussing football (soccer 😒)</Text>
              </ListItem>
              <ListItem>
                <Text as="samp" > I also like to read books</Text>
              </ListItem>
              <ListItem>
                <Text as="samp" > I enjoy almost 95% of the sports activities out there</Text>
              </ListItem>
              <ListItem>
                <Text as="samp" > and, I am very competitive!!</Text>
              </ListItem>
              <ListItem>
                <Text as="samp" > Some might even call me a nature freak, but I think 'freak' is a strong word, more like a nature 'hound'! xD </Text>
              </ListItem>
              <ListItem>
                <Text as="samp"> You can reach me at <Link color="green" href="mailto:sarang1699@gmail.com">sarang1699@gmail.com</Link> </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </>
    )
}