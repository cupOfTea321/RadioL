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
import {Box, Typography} from "@mui/material";
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
    const history = [
        {
            text: 'Такие площадки были очень интересные как для студентов, так и для организаторов. Особенно хочу отметить выступления гостей Фестиваля на его открытии. Это были философские, ёмкие, душевные и очень мотивирующие к действию и осмыслениювыступления.',
            author: 'Елена Юрьевна Арапова',
            ps: 'руководитель инжинирингового центра НТЦ УП РАН (Москва)'
        },
        {
            text: 'Меня приятно удивил размах мероприятия, количество и качество участников! Были проведены очень интересные "круглые столы". Понравилось, что и другие вузы приняли активное участие в Фестивале. Конечно, же, огромное спасибо организаторам за чёткую работу!',
            author: 'Алексей Александрович Комаров',
            ps: 'зав. кафедрой Радиотехнических приборов и антенных систем НИУ «МЭИ» (Москва)'
        },
        {
            text: 'Польза прежде всего заключается в опыте работы с различными предприятиями и организации взаимодействия с участниками на фестивале. Думаю, что продумывание потоков студентов и систематизация их вовлеченности довольно нужная мне деятельность, которая пригодится в будущем.',
            author: 'Ксения Михайловна Набатова',
            ps: 'сотрудник кафедры Радиотехнических систем НИУ «МЭИ» (Москва), Организатор Профориентационного трека'
        },
        {
            text: 'Как участнику фестиваля радиоэлектроники хотелось бы выразить благодарность организаторам за их работу. Особенно за удобные временные рамки и грамотную техническую организацию.',
            author: 'Павел Чернов',
            ps: 'студент группы БРС-211, ТГТУ (Тамбов)'
        },
    ]
    const boxRef = useRef(null)
    return (
        <Box
            sx={{
                overflowX: 'hidden',
                cursor: 'grab'
            }}

            ref={boxRef}
        >
            <motion.div
                style={{
                    padding: '10px',
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
                        <NewsCard news={item}/>
                    </motion.div>
                ))}
                {id === 4 && history.map(item => (
                    <motion.div style={{

                    }}>
                        <Box sx={{
                            background: '#004077',
                            color: 'white',
                            borderRadius: '10px',
                            width: {md: '800px', sm: '600px', xs: '300px'},
                            padding: {sm: '36px 30px', xs: '20px 10px'},
                            height: '350px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <Typography variant={'h5'} sx={{fontWeight: 400}}>
                                {item.text}
                            </Typography>
                            <Box>
                                <Typography variant={'h5'} sx={
                                    {marginTop: '36px',
                                        marginBottom: '10px',
                                        fontWeight: 700
                                    }}>
                                    {item.author}
                                </Typography>
                                <Typography variant={'h5'}>
                                    {item.ps}
                                </Typography>
                            </Box>

                        </Box>

                    </motion.div>
                ))}
            </motion.div>
        </Box>
    );
};

export default MySwapper;
