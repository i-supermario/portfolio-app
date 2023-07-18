import { Container } from "@chakra-ui/react";
import NavMenu from "../components/navmenu";

export default function Header(){
    return(
        <>
            <Container display="flex" justifyContent="space-between">
                <NavMenu/>
            </Container>
        </>
    )
}