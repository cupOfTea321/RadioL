import React from 'react';
import {Box, Container, IconButton, Menu, MenuItem, Typography} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.svg'
import MainBtn from "../ui/MainBtn.jsx";
const options = [
    {name: 'Программа', path: '/'},
    {name: 'Описание', path: '/'},
    {name: 'Треки', path: '/'},
    {name: 'История', path: '/'},
    {name: 'Контакты', path: '/'},
]
const MyBar = () => {
    const opportunities = [
        'Школьникам',
        'Студентам',
        'Выпускникам',
        'Партнерам',
    ]
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const pages = [
        {name: 'Программа', path: '/'},
        {name: 'Описание', path: '/'},
        {name: 'Треки', path: '/'},
        {name: 'История', path: '/'},
        {name: 'Контакты', path: '/'},
    ]
    return (
        <Box sx={{
            background: 'var(--main-black)',
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            zIndex: 100,
            boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
            // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        }}>
        <Container maxWidth={'lg'} sx={{
            display: 'flex',
            // width: '100%',

            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: {sm: '30px', xs: '15px'},
            paddingBottom: {sm: '22px', xs: '11px'},
        }}>

            <Typography sx={{
                // float: 'left',
                // marginLeft: '0'
                paddingTop: '10px',
                textAlign: 'left',
                width: '40%',
                color: 'white',
                fontSize: '32px'
            }} >
                <a to={'/'} style={{color: 'white'}}>
                    <Box component={'img'} src={logo} sx={{
                        width: '188px',
                        height: '36px'
                    }}/>
                </a>
            </Typography>

            <Box sx={{
                width: '60%',
                justifyContent: 'space-between',
                fontSize: '20px',
                display: {md: 'flex', sm: 'none', xs: 'none'},
                // paddingTop: '5px'
            }}>
                {/*<a to={'/possibilities'} style={{color: 'white'}}>*/}
                {/*    Возможности*/}
                {/*</a>*/}
                {pages.map((page, index) => (
                    <a key={index} to={page.path} style={{color: 'white'}}>
                        {page.name}
                    </a>
                ))}
            </Box>
            <Box sx={{width: '30%', textAlign: 'right'}}>
                <MainBtn/>
            </Box>

            {/* МОБИЛЬНАЯ ВЕРСИЯ*/}
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                    display: {md: 'none', sm: 'block', xs: 'block'}
                }}
            >
                <MenuIcon sx={{color: 'white', width: '54px', height: '54px'}}/>
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        // maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <a key={option.name} to={option.to} style={{
                        color: 'black'
                    }}>
                        <MenuItem  selected={option === 'Pyxis'} onClick={handleClose}>
                            {option.name}
                        </MenuItem>
                    </a>

                ))}

                    <Box component={'button'} sx={{


                        background: 'var(--red)',

                    }}>
                        <MenuItem selected={'Pyxis'} onClick={handleClose} sx={{
                            padding: '10px 18px 10px 18px',
                            borderRadius: '80px',
                            fontSize: '10px',
                            background: '#C10630 !important',
                            color: 'white',
                            marginLeft: '10px'
                        }}>
                        Регистрация
                        </MenuItem>
                    </Box>


            </Menu>
        </Container>
        </Box>
    );
};

export default MyBar;
