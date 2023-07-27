import React from 'react';
import {Box} from "@mui/material";

const MainBtn = ({sx, title = 'Регистрация'}) => {
    return (
        <Box component={'button'} sx={{
            padding: '22px',
            borderRadius: '50px',
            fontSize: {md: '20px', sm: '10px', xs: '10px'},
            background: 'var(--red)',
            color: 'white',
            display: {md: 'inline-block', sm: 'none', xs: 'none'},
            fontWeight: 700,
            ...sx
        }}>
            {title}
        </Box>
    );
};

export default MainBtn;
