import React, { useState, useEffect } from 'react';
import Link1 from '@mui/material/Link';
import { useRouter } from 'next/router';
import { Container, Box, Typography, IconButton, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import renderHTML from 'react-render-html';
import { useSelector } from "react-redux";

export default function AboutUs(props) {

    const aboutUsContent = useSelector(state => state.data.aboutUsContent);
    const [isAbout, setisAbout] = useState(false);

    return (
        <Container
            sx={{ width: 600 }}
            disableGutters
            role="dialog"
            aria-labelledby="aboutUsHeading"
            aria-describedby="aboutUsContent"
        >
            <Box
                sx={{ width: '100%', textAlign: 'right', }}
                role="presentation"
            >
                <IconButton
                    id="close-button"
                    color="primary"
                    component="span"
                    aria-label="close button"
                    onClick={props.toggleDrawerForAboutUs}
                    aria-controls={isAbout ? 'close-button' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isAbout ? 'true' : undefined}
                >
                    <CloseIcon style={{ color: "#000000", fontSize: 40, }} />
                </IconButton>
            </Box>

            <Box sx={{ textAlign: 'center', }}>
                <img style={{ width: 100, }} src="../media-image.png" alt="NEBULA MEDIA GROUP" />
                <Typography variant="h6" pt={2} gutterBottom role="heading" aria-level="2">
                    ACCESSIBLE COLOR PALETTE ANALYZER
                </Typography>
                <Typography variant="subtitle2" gutterBottom role="heading" aria-level="3">
                    COLOR CONTRAST ANALYZER TOOL
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', }}>
                <Typography
                    variant="h6"
                    py={2}
                    gutterBottom
                    id="aboutUsHeading"
                >
                    Abous Us
                </Typography>
            </Box>
            <Box sx={{ paddingLeft: 4, paddingRight: 4, }} id="aboutUsContent">
                {renderHTML(aboutUsContent)}
            </Box>

            <Box sx={{ paddingLeft: 4, paddingBottom: 5 }}>
                <Typography variant="subtitle1" pt={2} gutterBottom component="div">
                    CONTACT
                </Typography>
                <Link1 href="#" variant="body2" underline="always">
                    {'query@nebulamediagroup.com'}
                </Link1>
            </Box>


        </Container>
    )
}
