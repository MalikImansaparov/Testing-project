import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {BreadCrumb} from "../modules/breadCrumbs";
import {NavWrap} from "../header/style";
import {useNavigate} from "react-router";


export const Footer = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1, mt: '30px' }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ml: '120px'}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer',  } }}
                        onClick={()=> navigate(-1)}
                    >
                        CodifyLib
                    </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

