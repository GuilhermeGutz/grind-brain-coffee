import { useState } from "react";
import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { IconButtonHeader, SearchButton, DrawerShop } from "../../atoms";

import { Link } from "react-router-dom";

export const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen: boolean) => {
      setOpen(isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Rolagem suave
        });
    };    

    return (
        <AppBar
            sx={{
                position: 'fixed',
                width: '80%',
                right: '50%',
                transform: 'translateX(50%)',
                top: '24px',
                borderRadius: '50px',
                bgcolor: 'primary.main',
                zIndex: '10px',
            }}>
            <Toolbar sx={{width: '100%'}}>
                <Stack sx={{ width: '100%' }}>
                    <Box sx={{
                        height: 90,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            color: "primary.contrastText"
                        }}>
                            <Button
                                component={Link}
                                to="/home"
                                onClick={scrollToTop}
                                sx={{color:"primary.contrastText"}} 
                                variant="text"
                            >
                                Home
                            </Button>
                            <Button sx={{color:"primary.contrastText"}}
                                variant="text"
                                onClick={() => {
                                    scrollToTop
                                    toggleDrawer(true)                                
                                }}
                            >
                                Shop
                            </Button>
                            <DrawerShop open={open} toggleDrawer={toggleDrawer}>
                                <Button variant="text" sx={{ color: "text.secondary" }}>COFFEE</Button>
                                <Button variant="text" sx={{ color: "text.secondary" }}>BREW TOOLS</Button>
                                <Button variant="text" sx={{ color: "text.secondary" }}>MERCH</Button>
                            </DrawerShop>
                            <Button sx={{color:"primary.contrastText"}} variant="text">Club</Button>
                            <Button
                                component={Link}
                                to="/about"
                                onClick={scrollToTop}
                                sx={{color:"primary.contrastText"}}
                                variant="text"
                            >
                                About
                            </Button>
                        </Box>
                        <Box
                            component="img"
                            sx={{
                                height: 160,
                                width: 150,
                                alignItems: 'center',
                                objectFit: 'cover',
                                zIndex: 10,
                                position: 'absolute',
                                top: '-20px', // Ajuste este valor para controlar a posição da logo
                                left: '50%',
                                transform: 'translateX(-50%)',
                                textDecoration: 'none', // Remove underline de links
                            }}
                            alt="Logo"
                            src="src/presentation/assets/icon-grind-brain-coffee.svg"
                        />
                        <Box sx={{ display: 'flex' }}>
                            <SearchButton aria-label="search">
                                <SearchIcon />
                            </SearchButton>
                            <IconButtonHeader aria-label="person">
                                <AccountCircleIcon />
                            </IconButtonHeader>
                            <IconButtonHeader aria-label="store">
                                <AddShoppingCartIcon />
                            </IconButtonHeader>
                        </Box>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
