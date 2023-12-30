import {  Grid } from "@chakra-ui/react";
import Project from "./project";

export default function ProjectList(){
    return(
        <>
            <Grid
                templateColumns="repeat(2,1fr)"
                templateRows="repeat(2,1fr)"
                rowGap="20"
                columnGap="40"
                padding="40px 0 100px 0"
            >
                <Project
                    Name="Ebay"
                    WebsiteUrl="https://frontend-dot-csci571-hw3-403803.wl.r.appspot.com/"
                    Description="A Product Search clone of Ebay which allows the user to search for various products based on custom provided filters;A click on any product in either Results or WishList section will show you further details about that product such as product specifications, images, seller details, shipping details, and other similar products;You can also choose to add these products in your wishlist;This website was built as part of my coursework, using JavaScript, CSS, Bootstrap, React for frontend, and Express for backend."
                    ImageUrl="https://raw.githubusercontent.com/i-supermario/portfolio-app/main/app/src/assets/ebaySS.png"
                />
                <Project 
                    Name="CatWiki" 
                    WebsiteUrl="https://catwiki-app.netlify.app/"
                    Description="A simple website about cats which allows the user to search different cat breeds and view their profile which includes information such as maintenance and adaptibility;The information about cats is provided using the CatAPI;The frontend is built using React & Chakra UI, hosted on Netlify;The backend is built using Express hosted on Render;The design for the website was given by devChallenges.io" 
                    ImageUrl="https://github.com/i-supermario/catWiki-repo/blob/main/design/desktop1.png?raw=true" 
                />

                <Project 
                    Name="Ebay Android App" 
                    WebsiteUrl=""
                    Description="A Product Search Mobile app mirrorring the Ebay website, which allows the user to search for various products based on custom provided filters;A click on any product in either Results or WishList section will show you further details about that product such as product specifications, images, seller details, shipping details, and other similar products;You can also choose to add these products in your wishlist;This app was built as part of my coursework, using Android Studio & Kotlin" 
                    ImageUrl="https://raw.githubusercontent.com/i-supermario/portfolio-app/main/app/src/assets/ebayAppSS.png" 
                />

                <Project 
                    Name="Meme Collector" 
                    WebsiteUrl="https://meme-collector.netlify.app/"
                    Description="A website to collect everything I find on the internet, usually memes, but at times some interesting unusual stuff as well;The frontend is built using React & Material UI, hosted on Netlify;The backend is built using Express hosted on Render;The design for the website was given by devChallenges.io" 
                    ImageUrl="https://raw.githubusercontent.com/i-supermario/portfolio-app/main/app/src/assets/memecollector.png" 
                />

                
            </Grid>
        </>
    )
}