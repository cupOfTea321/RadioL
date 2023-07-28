import React from 'react';
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";

const JournalBtn = ({title = 'Рубрика', position = 'absolute', sx}) => {
    return (
        <Box sx={{

            position: position,
            top: '22px',
            left: '6px',
            fontSize: {sm: '20px', xs: '10px'},
            padding: {sm: '14px 22px', xs: '6px 15px'},
            borderRadius: '50px',
            border: {sm: '2px solid #004077', xs: '1px solid #004077'},
            background: 'var(--main)',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            // color: 'rgba(138, 138, 138, 1)'
            color: '#004077',
            ...sx
        }}>
            <Typography sx={{fontSize: {sm: '20px', xs: '10px'}}}>
                #{title}
            </Typography>
        </Box>
    );
};

export default JournalBtn;
