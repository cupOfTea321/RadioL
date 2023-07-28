import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography: {
            cardTitle: {}
        // h2 : {fontSize: {lg: '48px', md: '48px', sm: '30px', xs: '20px'}, fontWeight: 700},
        // h3: {fontSize: {lg: '40px', md: '33px', sm: '25px', xs: '16px'}, fontWeight: 700},
        // h4: {fontSize: {lg: '32px', md: '26px', sm: '20px', xs: '13px'}},
        // h5: {fontSize: {lg: '24px', md: '20px', sm: '15px', xs: '10px'}},
        // h6: {fontSize: {lg: '20px', md: '16px', sm: '12px', xs: '8px'}},
    },

});
theme.typography.h1 = {
    fontSize: '96px',
    [theme.breakpoints.only('md')]: {
        fontSize: '80px',
    },
    [theme.breakpoints.only('sm')]: {
        fontSize: '60px',
    },
    [theme.breakpoints.only('xs')]: {
        fontSize: '40px',
    },
}
theme.typography.h2 = {
    fontSize: '40px',
    [theme.breakpoints.only('xs')]: {
        fontSize: '28px',
    },
}
theme.typography.h3 = {
    fontSize: '32px',
    fontWeight: 400,
    [theme.breakpoints.only('xs')]: {
        fontSize: '16px',
    },
}
theme.typography.h4 = {
    fontSize: '32px',
    fontWeight: 400,
    [theme.breakpoints.only('sm')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.only('xs')]: {
        fontSize: '12px',
    },
}
theme.typography.cardTitle = {
    fontSize: '32px',
        fontWeight: 700,
        [theme.breakpoints.only('xs')]: {
        fontSize: '24px',
    },
}
theme.typography.h5 = {
    fontSize: '24px',
    fontWeight: 400,
    [theme.breakpoints.only('xs')]: {
        fontSize: '16px',
    },
}
export const blueBtnCSS = {
    fontSize: {sm: '40px', xs: '20px'},
    background: 'white',
    color: 'var(--blue)',
    border: '2px solid var(--blue)',
    fontWeight: 400,
    padding: {lg: '23px 145px', md: '23px 80px', sm: '23px 80px', xs: '23px 80px'},
    display: 'flex',
    justifyContent: 'center',
    marginTop: {md: '36px', sm: '20px', xs: '20px'},
}
