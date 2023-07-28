import React from 'react';
import {Box, Typography} from "@mui/material";
import MainBtn from "./ui/MainBtn.jsx";
import {blueBtnCSS} from "../mui/theme.js";
import MySwapper from "./MySwapper.jsx";

const NewsBlock = () => {
    return (
        <Box sx={{
            marginTop: {md: '140px', sm: '80px', xs: '40px'},
        }}>
            <Typography component={'h2'} variant={'h2'} sx={{
                fontWeight: 700,
                color: '#004077',

            }}>
                Как это было?
            </Typography>
            <Box sx={{
                display: 'flex',
                // justifyContent: 'space-between',
                flexDirection: {md: 'row', sm: 'column', xs: 'column'},
                width: {md: '100%', sm: '50%', xs: '80%'},
                margin: '0 auto',
                gap: {md: '20px', sm: '0', xs: '0'},
                marginBottom: {sm: '36px', xs: '20px'}
            }}>
                <MainBtn sx={{
                    fontSize: {sm: '20px', xs: '16px'},
                    padding: {md: '22px 76px', sm: '22px 76px', xs: '11px 38px'},
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: {md: '36px', sm: '20px', xs: '20px'},
                    // width: '120%'
                }} title={'IV Фестиваль'}/>
                <MainBtn title={'III Фестиваль'}
                         sx={{
                             ...blueBtnCSS,
                             fontSize: {sm: '20px', xs: '16px'},
                             padding: {md: '22px 76px', sm: '22px 76px', xs: '11px 38px'},
                             marginTop: {md: '36px', sm: '10px', xs: '10px'},

                         }}/>
                <MainBtn title={'II Фестиваль'} sx={{
                    ...blueBtnCSS,
                    fontSize: {sm: '20px', xs: '16px'},
                    padding: {md: '22px 76px', sm: '22px 76px', xs: '11px 38px'},
                    marginTop: {md: '36px', sm: '10px', xs: '10px'},

                }} />
            </Box>
            <MySwapper id={4} />
        </Box>
    );
};

export default NewsBlock;
