import {  Grid } from "@chakra-ui/react";
import Project from "./project";

export default function ProjectList(){
    return(
        <>
            <Grid
                templateColumns="repeat(2,1fr)"
                templateRows="repeat(2,1fr)"
                gap="40"
                paddingY="40px"
            >
                <Project 
                    Name="CatWiki" 
                    WebsiteUrl="https://catwiki-app.netlify.app/"
                    Description="A simple website about cats which allows the user to search different cat breeds and view their profile which includes information such as maintenance and adaptibility. The information about cats is provided using the CatAPI. The frontend is built using React & Chakra UI, hosted on Netlify. The backend is built using Express hosted on Render. The design for the website was given by devChallenges.io" 
                    ImageUrl="https://github.com/i-supermario/catWiki-repo/blob/main/design/desktop1.png?raw=true" 
                />

                <Project 
                    Name="Meme Collector" 
                    WebsiteUrl="https://meme-collector.netlify.app/"
                    Description="A website to collect everything I find on the internet, usually memes, but at times some interesting unusual stuff as well. The frontend is built using React & Material UI, hosted on Netlify. The backend is built using Express hosted on Render. The design for the website was given by devChallenges.io" 
                    ImageUrl="https://raw.githubusercontent.com/i-supermario/portfolio-app/main/app/src/assets/memecollector.png" 
                />
            </Grid>
        </>
    )
}