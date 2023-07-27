import MyBar from "./components/layout/MyBar.jsx";
import {Container} from "@mui/material";
import './index.css'
import MainBanner from "./components/MainBanner.jsx";
import InfoBlock from "./components/InfoBlock.jsx";

function App() {

  return (
    <>
        <MyBar/>
        <Container sx={{
            marginTop: {md: '140px', sm: '80px', xs: '40px'},

        }}>
            <MainBanner/>

            <InfoBlock/>

        </Container>


    </>
  )
}

export default App
