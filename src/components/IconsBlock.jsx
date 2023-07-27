import React from 'react';
import {Box, Typography} from "@mui/material";
import icon1 from "../assets/коммуникации.png";
import icon2 from "../assets/рост.png";
import icon3 from "../assets/обсуждения.png";

const IconsBlock = () => {
    const iconCSS = {
        width: {md: '165px', sm: '80px', xs: '70px'},
    }
    const iconBlockCSS = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
    const iconTextCSS = {
        fontSize: {md: '32px', sm: '20px', xs: '12px'},
        color: '#004077',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: '20px'
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: {md: '140px', sm: '80px', xs: '40px'},

        }}>
            <Box sx={iconBlockCSS}>
                <Box component={'img'} src={icon1} sx={iconCSS}/>
                <Typography sx={iconTextCSS}>
                    Универсальная
                    площадка
                    коммуникации
                </Typography>
            </Box>
            <Box sx={iconBlockCSS}>
                <Box component={'img'} src={icon2} sx={iconCSS}/>
                <Typography sx={iconTextCSS}>
                    Развитие
                    фестивального
                    движения
                </Typography>
            </Box>
            <Box sx={iconBlockCSS}>
                <Box component={'img'} src={icon3} sx={iconCSS}/>
                <Typography sx={iconTextCSS}>
                    Важные
                    темы для
                    обсуждения
                </Typography>
            </Box>



        </Box>
    );
};

export default IconsBlock;
