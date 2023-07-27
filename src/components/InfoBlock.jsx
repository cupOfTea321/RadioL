import React from 'react';
import {Box, Typography} from "@mui/material";
import MainBtn from "./ui/MainBtn.jsx";

const InfoBlock = () => {
    return (
        <>
            <Typography sx={{
                background: '#004077',
                color: 'white',
                padding: {sm: '72px 108px', xs: '24px 36px'},
                fontSize: {sm: '32px', xs: '18px'},
                borderRadius: '40px',
                marginTop: {md: '140px', sm: '80px', xs: '40px'},

                width: '100%'
            }}>
                Создаем новые формы популяризации и развития отрасли, вовлечение в них профессиональных участников из сфер науки,образования, промышленности и военных.
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: {md: 'row', sm: 'column', xs: 'column'},
                width: {md: '100%', sm: '50%', xs: '50%'},
                margin: '0 auto'
            }}>
                <MainBtn sx={{
                    fontSize: {sm: '40px', xs: '20px'},
                    padding: {lg: '23px 145px', md: '23px 80px', sm: '23px 80px', xs: '23px 80px'},
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: {md: '36px', sm: '20px', xs: '20px'},
                }}/>
                <MainBtn sx={{
                    fontSize: {sm: '40px', xs: '20px'},
                    background: 'white',
                    color: 'var(--blue)',
                    border: '2px solid var(--blue)',
                    fontWeight: 400,
                    padding: {lg: '23px 145px', md: '23px 80px', sm: '23px 80px', xs: '23px 80px'},
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: {md: '36px', sm: '20px', xs: '20px'},
                }} title={'Программа'}/>
            </Box>
        </>
    );
};

export default InfoBlock;
