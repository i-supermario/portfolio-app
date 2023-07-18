import { Menu,MenuButton,MenuIcon, MenuItem, MenuList } from "@chakra-ui/react";


export default function NavMenu(){
    return(
        <>
            <Menu>
                <MenuButton padding="5px">
                    Menu
                </MenuButton>
                <MenuList>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Blogs</MenuItem>
                    <MenuItem>Gallery</MenuItem>
                    <MenuItem>Music</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}