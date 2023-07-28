import React, {useRef} from 'react';
import {motion} from 'framer-motion'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
import slide5 from '../assets/slide5.png'
import slide6 from '../assets/slide6.png'
import slide7 from '../assets/slide7.png'
import slide8 from '../assets/slide8.png'
import slide9 from '../assets/slide9.png'
import slide10 from '../assets/slide10.png'
import slide11 from '../assets/slide11.png'
import slide12 from '../assets/slide12.png'
import slide13 from '../assets/slide13.png'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import {Box} from "@mui/material";
import NewsCard from "./NewsCard.jsx";
const MySwapper = ({id}) => {
    const images = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
    ]
    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
        slide9,
        slide10,
        slide11,
        slide12,
        slide13,
    ]
    const news = [
        {
            photo: news1,
            button: [
            'Студентам'
            ],
            title: 'ГТО в радиоэлектронике',
            text: 'На фестивале пройдет научно-спортивный конкурс “ГТО в радиоэлектронике”'
        },
        {
            photo: news2,
            button: [
                'Школьникам'
            ],
            title: 'Роботы в городе',
            text: 'На макете беспилотных транспортных систем “робовейник” состоится финал'
        },
        {
            photo: news1,
            button: [
                'Студентам',
                'Школьникам'
            ],
            title: 'Связь поколений',
            text: 'Запустим линию связи между поколениями - олды снова в деле! Познайте вместе с ними технологии древней развитой цивилизации.'
        },
        {
            photo: news2,
            button: [
                'Студентам',
            ],
            title: 'Самая длинная радиолиния',
            text: 'На фестивале пройдет научно-спортивный конкурс “ГТО в радиоэлектронике”'
        },
    ]
    const boxRef = useRef(null)
    return (
        <Box
            sx={{
                // height: '400px',
                // padding: '10px',
                // border: '1px solid black',
                // display: 'flex',
                // width: '100%',
                overflowX: 'hidden',
                cursor: 'grab'
            }}

            ref={boxRef}
            // drag='x'
            // dragConstraints={boxRef}
        >
            <motion.div
                style={{
                    // width: '100%',
                    // height: {sm: '360px', xs: '230px'},
                    padding: '10px',
                    // border: '1px solid black',
                    display: 'inline-flex',
                    gap: '20px',
                }}
                drag='x'
                dragConstraints={boxRef}
            >
                {id === 1 && images.map(item => (
                        <motion.div>
                        <Box
                            drag='x'
                            dragConstraints={boxRef}
                            component={'img'}
                            src={item}
                            key={item}
                            sx={{
                                width: {sm: '500px', xs: '320px'},
                                height: {sm: '360px', xs: '230px'},
                                borderRadius: '15px',
                                pointerEvents: 'none',

                            }}
                        />
                        </motion.div>
                    ))}
                {id === 2 && slides.map(item => (
                    <motion.div>
                        <Box
                            drag='x'
                            dragConstraints={boxRef}
                            component={'img'}
                            src={item}
                            key={item}
                            sx={{
                                width: {sm: '500px', xs: '320px'},
                                height: {sm: '360px', xs: '230px'},
                                borderRadius: '15px',
                                pointerEvents: 'none'
                            }}
                        />
                    </motion.div>
                ))}
                {id === 3 && news.map(item => (
                    <motion.div style={{
                        alignSelf: 'stretch'
                    }}>
                        {/*<Box*/}
                        {/*    drag='x'*/}
                        {/*    dragConstraints={boxRef}*/}
                        {/*    component={'img'}*/}
                        {/*    src={item}*/}
                        {/*    key={item}*/}
                        {/*    sx={{*/}
                        {/*        width: {sm: '500px', xs: '320px'},*/}
                        {/*        height: {sm: '360px', xs: '230px'},*/}
                        {/*        borderRadius: '15px',*/}
                        {/*        pointerEvents: 'none'*/}
                        {/*    }}*/}
                        {/*/>*/}
                        <NewsCard news={item}/>
                    </motion.div>
                ))}
            </motion.div>
        </Box>
    );
};

export default MySwapper;
