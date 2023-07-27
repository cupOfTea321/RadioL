import React from 'react';
import {Box, Typography} from "@mui/material";
import MySwapper from "./MySwapper.jsx";

const ImageBlock = ({id = 1, title = 'Отраслевой трек', text = 'В рамках трека планируется ряд круглых столов с обсуждением перспективных сегментов радиоэлектроники'}) => {
    return (
        <Box sx={{
            marginTop: {md: '140px', sm: '80px', xs: '40px'},
        }}>
            <Typography component={'h2'} sx={{
                fontSize: {sm: '40px', xs: '32px'},
                fontWeight: 700,
                color: '#004077',

            }}>
                {title}
            </Typography>
            <Typography component={'h3'} sx={{
                fontSize: {sm: '32px', xs: '20px'},
                marginBottom: {sm: '36px', xs: '20px'},
                marginTop: {sm: '36px', xs: '20px'},
                color: '#004077',

            }}>
                {text}
            </Typography>
            <MySwapper id={id}/>
        </Box>
    );
};

export default ImageBlock;
