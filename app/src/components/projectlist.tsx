import { Grid } from "@chakra-ui/react";
import Project from "./project";

export default function ProjectList(){
    return(
        <>
            <Grid
                templateColumns="repeat(2,1fr)"
                templateRows="repeat(2,1fr)"
                gap="40"
            >
                <Project 
                    projectName="CatWiki" 
                    projectDescription="" />
            </Grid>
        </>
    )
}