import { Accordion, Container, Divider, Text } from "@chakra-ui/react";
import Experience from "./experience";

export default function ExperienceList(){
    return(
        <>
            <Container display="flex" flexDirection="column" rowGap="10px" padding={{base:"0"}} margin="0">
                <Text as="em" fontSize="2xl" >Experiences</Text>
                <Divider minWidth={{base:'350px',sm:'650px'}}/>
                <Accordion minWidth={{base:'350px',sm:'650px'}} allowToggle>
                    <Experience
                        CompanyName="UniGiig"
                        position="Software Development Engineer Intern"
                        from="May 2024"
                        to="Present"
                        description="Creating MongoDB aggregation pipelines to generate marketing data leading to increase in user conversion by 5%;Developed reminders feature to improve gig completion rate by 9% using Firebase Cloud Messaging and Cron utilities;Conducted thorough user testing and code reviews to maintain code quality and functionality;Built an optimized and responsive website and mobile application using React, React Native, Redux, TypeScript & Tailwind CSS;Connected forms on company website using Google App Scripts to store user data in Google Sheets, reducing manual effort"

                    />
                    <Experience
                        CompanyName="Flow"
                        position="Full Stack Developer Intern"
                        from="Feb 2024"
                        to="May 2024"
                        description="Continuous development, debugging and testing of application created using Electron.js, React.js, HTML, CSS, and Material-UI;Creating third-party integrations with platforms like WhatsApp, Telegram and LinkedIn to improve user experience;Improved readability and codebase quality by 2% with lazy loading, code splitting and eliminating redundancies"
                    />
                    <Experience 
                        CompanyName="Reach Technologies"
                        position="Software Development Intern"
                        from="June 2022"
                        to="Nov 2022"
                        description="Led the development and maintenance of the company website, ensuring smooth operation and a user-friendly interface;Implemented SEO strategies for website optimization, increasing user engagement and visibility in search engine result;Led the design and development efforts for new websites, delivering solutions tailored to meet client requirements;Successfully deployed website on Firebase, along with custom domain configuration with 3rd party vendor;Built responsive websites using HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, Chakra-UI" 
                    />
                    <Experience 
                        CompanyName="Whirlpool Corporation"
                        position="Machine Learning Intern"
                        from="Oct 2020"
                        to="Oct 2021"
                        description="Researched Continual Learning algorithms, comparing seven algorithms such as Synaptic Intelligence, Generative Replays and more;
                        Evaluated algorithm performance across diverse datasets including MNIST, GTSRB, ASL;
                        Assessed algorithms in various scenarios Task, Class, and Domain continual learning;
                        Configuration of Param Shavak supercomputer for algorithm performance assessment and testing with Python scripts;
                        Presented research findings at the ICICITES-2021 conference, securing paper acceptance in the CRC Press associated journal" 
                    />
                    <Experience 
                        CompanyName="Kisan Forum Pvt Ltd"
                        position=" Software Developement Intern"
                        from="Feb 2020"
                        to="May 2020"
                        description="Developed REST API endpoints in Django Framework with PostgreSQL database and Shopify API, conducted API testing using Postman;
                        Implemented a solution in Python for storing and retrieving user media data using Amazon S3;
                        Wrote a python script to generate dynamic pdfs from HTML content;
                        Designed responsive and interactive client-side dashboards using HTML, CSS, JavaScript, and Bootstrap;
                        Acquired experience in Agile development by collaborating with cross-functional teams to deliver solutions iteratively" 
                    />
                </Accordion>
            </Container>
        </>
    )
}