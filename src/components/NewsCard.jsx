import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import JournalBtn from "./ui/JournalBtn.jsx";

const NewsCard = ({news}) => {
    const {text, title, button, photo} = news
    return (
        <Card sx={{ maxWidth: {sm: 387, xs: 285},
            // display: 'flex',
            margin: '0 auto',
            height: {sm: '600px', xs: '400px'},
            marginBottom: {sm: '36px', xs: '10px'},
        }}>
            <CardActionArea sx={{
                display: {sm: 'block', xs: 'block'},
                flexDirection: 'row-reverse',

            }}>
                <CardMedia
                    src={photo}
                    component={'img'}
                    sx={{
                        width: {sm: '387px', xs: '285px'},
                        height: {sm: '243px', xs: '200px'},
                        // background: 'var(--cards-phone)',
                        pointerEvents: 'none',
                        position: 'relative',
                        flex: 1,
                    }}

                />
                <CardContent sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    height: {sm: '357px', xs: '200px'},
                    marginTop: {sm: '60px', xs: '20px'},
                }}>
                        <JournalBtn sx={{
                            right: {sm: 'auto', xs: '12px'},
                            left: {sm: '6px', xs: 'auto'}
                        }} title={button[0]}/>
                    {button.length === 2 &&  <JournalBtn sx={{
                        right: {sm: '12px', xs: 'auto'},
                        left: {sm: 'auto', xs: '12px'}
                    }} title={button[1]}/>}
                    <Typography gutterBottom variant="h4" sx={{
                        fontWeight: 700,
                        fontSize: {sm: '32px', xs: '24px'},
                    }}>
                        {title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{
                        fontSize: {sm: '24px', xs: '16px'},
                    }}>
                        {text}
                    </Typography>
                </CardContent>

            </CardActionArea>
            {/*<CardActions>*/}

            {/*</CardActions>*/}
        </Card>
    );
};

export default NewsCard;
