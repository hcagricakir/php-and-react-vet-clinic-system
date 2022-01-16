import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { MyContext } from './MyContext';
import PetsIcon from '@mui/icons-material/Pets';


export default function ButtonAppBar() {
    const {logoutUser,showNewRegister,showHomePage } = useContext(MyContext);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}

                    >
                        <PetsIcon></PetsIcon>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Vet-Takip
                    </Typography>
                    <Button color="inherit" onClick={showHomePage}>Musteri Listesi</Button>
                    <Button color="inherit" onClick={showNewRegister}>Yeni Kayıt</Button>
                    <Button color="inherit" onClick={logoutUser}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}