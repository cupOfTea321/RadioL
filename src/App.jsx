import MyBar from "./components/layout/MyBar.jsx";
import {Box, Container, ThemeProvider, Typography} from "@mui/material";
import './index.css'
import MainBanner from "./components/MainBanner.jsx";
import InfoBlock from "./components/InfoBlock.jsx";
import icon1 from './assets/коммуникации.png'
import icon2 from './assets/рост.png'
import icon3 from './assets/обсуждения.png'
import IconsBlock from "./components/IconsBlock.jsx";
import MySwapper from "./components/MySwapper.jsx";
import ImageBlock from "./components/ImageBlock.jsx";
import {blueBtnCSS, theme} from "./mui/theme.js";
import React from "react";
import MainBtn from "./components/ui/MainBtn.jsx";
import NewsBlock from "./components/NewsBlock.jsx";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <MyBar/>
        <Container sx={{
            marginTop: {md: '220px', sm: '200px', xs: '160px'},

        }}>
            <MainBanner/>
            <InfoBlock/>
            <IconsBlock/>
            <ImageBlock/>
            <ImageBlock
                id={2}
                title={'Профориентационный трек'}
                text={'Самый масштабный трек фестиваля, который будет особенно\n' +
                    'интересен студентам и будущим абитуриентам.'}
            />
            <ImageBlock
                id={3}
                title={'Конкурсный трек'}
                text={'В этом треке будут организованы инженерные конкурсы для школьников, студентов и молодых специалистов.'}
            />
            <NewsBlock/>

        </Container>


    </ThemeProvider>
  )
}

export default App
