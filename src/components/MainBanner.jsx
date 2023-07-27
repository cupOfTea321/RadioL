import React from 'react';
import {Box, Typography} from "@mui/material";
import mainLogo from "../assets/mainLogo.svg";

const MainBanner = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            flexDirection: {sm: 'row', xs: 'column'}
        }}>
            <Box component={'img'} src={mainLogo} sx={{
                height: {sm: '140px', xs: '100px'},
                width: {md: '70%', sm: '65%', xs: '100%'},
                marginRight: {md: '36px', sm: '20px', xs: '0'}
            }}/>
            <Typography sx={{
                fontSize: {md: '68px', sm: '40px', xs: '26px'},
                color: 'var(--red)',
                fontWeight: 700,
                width: {md:'23%', sm: '33%', xs: '100%'},
                textAlign: 'center'
            }}>
                23-24
                ноября
            </Typography>
        </Box>
    );
};

export default MainBanner;
