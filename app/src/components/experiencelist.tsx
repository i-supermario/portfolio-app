import { Accordion, Container, Text } from "@chakra-ui/react";
import Experience from "./experience";

export default function ExperienceList(){
    return(
        <>
            <Container display="flex" flexDirection="column" rowGap="10px" padding="0" margin="0">
                <Text as="em" fontSize="2xl" >Experiences</Text>
                <Accordion minWidth="650px" allowToggle>
                    <Experience 
                        CompanyName="Reach Technologies"
                        position="Software Development Intern"
                        from="June 2022"
                        to="Nov 2022"
                        description="Development, maintenance, hosting and deployment of 3+ projects;Built various websites using React.js & Next.js;Styled using Chakra-UI, Tailwind CSS & Material-UI;Deployed website on Firebase.Web-hosting for 2 projects" 
                    />
                    <Experience 
                        CompanyName="Whirlpool Corporation"
                        position="Machine Learning Intern"
                        from="Oct 2020"
                        to="Oct 2021"
                        description="Wrote a comprehensive paper based on performance of different algorithms on the problem of Catastrophic Forgetting;Studied different algorithms such as Elastic Weight Consolidation, Synaptic Intelligence, Generative Replay, Expert Gate and more;Measured performance of these algorithms on different datasets such as MNIST, CIFAR100, Chars74K, Places365 and more" 
                    />
                    <Experience 
                        CompanyName="Kisan Forum Pvt Ltd"
                        position=" Software Developer Intern"
                        from="Feb 2020"
                        to="May 2020"
                        description="Translated 10+ PHP-based API endpoints to equivalent Django endpoints, ensuring seamless integration and improved performance requiring knowledge of SQL, PgAdmin, PostgreSQL, Python, Django, and REST;Created front-end dashboards using JavaScript, CSS, Bootstrap;Practiced in Agile Methodology of software development" 
                    />
                </Accordion>
            </Container>
        </>
    )
}