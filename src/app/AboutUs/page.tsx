'use client'


import React from 'react'

import styles from './styles.module.css'
import Image from 'next/image';
import { Box, Container, Grid2, Typography } from '@mui/material'



const Aboutus = () => {
    return (


        // <Box sx={{ flexGrow: 1 }}>

        //     <Grid2 container spacing={2}>

        //         <Grid2 size={{ xs: 6, md: 4 }}>
        //             <Image src="/images/abhaypic.jpg" alt="Profile Image" width={500} height={300} />
        //         </Grid2>
        //         <Grid2 size={{ xs: 6, md: 8 }} sx={{p:9}}>

        //             <Typography variant='h1' sx={{color:"whitesmoke"}}>About Me</Typography>
        //             <Typography variant='body1' sx={{color:"tomato"}}>Hi My Name is Abhay Prajapati</Typography>

        //             <Typography variant='body1' sx={{color:"gray"}}> I'm a passionate Full Stack Developer with 2 years of experience in the MERN stack.
        //                 I specialize in building scalable web applications and have experience with AWS, MongoDB, and React.js.
        //             </Typography>


        //         </Grid2>
        //     </Grid2>

        // </Box>

        // <Container maxWidth="sm">
        //     <h1>hello</h1>
        // </Container>

        <Container>
            <Box sx={{ minHeight: '100vh', alignContent: "center" }} >
                <Grid2 container spacing={2}>

                    <Grid2 className={styles.graphImg} size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src="/images/abhaypic.jpg" alt="Profile Image" width={300} height={100} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 8 }} sx={{ p: 9 }}>

                        <Typography variant='h1' sx={{ color: "whitesmoke" }}>About Me</Typography>
                        <Typography variant='body1' sx={{ color: "tomato" }}>Hi My Name is Abhay Prajapati</Typography>

                        <Typography variant='body1' sx={{ color: "gray" }}> I'm a Full Stack Developer with 2 years of experience specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                            I have worked on various projects, including e-commerce platforms, ERP systems, and wellness platforms, handling both frontend and backend development.
                            I enjoy building scalable web applications, optimizing performance, and exploring new technologies. Apart from coding, I love traveling.
                            Currently, I'm expanding my knowledge in AWS, microservices, and DevOps to enhance my expertise in modern web development.
                        </Typography>

                        <Grid2 className={styles.buttons} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                            <Grid2 size={6}>
                                <button>1. Reactjs</button>
                            </Grid2>
                            <Grid2 size={6}>
                                <button>2. Nodejs</button>
                            </Grid2>
                            <Grid2 size={6}>
                                <button>3. MongoDB</button>
                            </Grid2>
                            <Grid2 size={6}>
                                <button>4. Redis</button>
                            </Grid2>
                        </Grid2>

                    </Grid2>
                </Grid2>
            </Box>

        </Container>

    )
}

export default Aboutus
