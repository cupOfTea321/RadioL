import React, {useRef} from 'react';
import {motion} from 'framer-motion'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'
import {Box} from "@mui/material";
const MySwapper = () => {
    const images = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
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
                    height: '400px',
                    padding: '10px',
                    // border: '1px solid black',
                    display: 'inline-flex',
                    gap: '20px',
                }}
                drag='x'
                dragConstraints={boxRef}
            >
                {
                    images.map(item => (
                        <motion.div>
                        <Box
                            drag='x'
                            dragConstraints={boxRef}
                            component={'img'}
                            src={item}
                            key={item}
                            sx={{
                                width: '500px',
                                height: '360px',
                                borderRadius: '15px',
                                pointerEvents: 'none'
                            }}
                        />
                        </motion.div>
                    ))
                }
            </motion.div>
        </Box>
    );
};

export default MySwapper;
