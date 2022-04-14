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
            className="about_container"
            disableGutters
            role="dialog"
            aria-labelledby="aboutUsHeading"
            aria-describedby="aboutUsContent"
        >
            <Box
                className="top_close_btn"
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

            <Box
                className="about_header_content"
            >
                <img src="../media-image.png" alt="NEBULA MEDIA GROUP" />
                <Typography
                    className="about_header_title"
                    variant="h6"
                    pt={2} gutterBottom
                    role="heading"
                    aria-level="2">
                    ACCESSIBILITY STATEMENT GENERATOR
                </Typography>
                <Typography
                    className="about_header_subtitle"
                    variant="subtitle2"
                    gutterBottom
                    role="heading"
                    aria-level="3">
                   Online Statement Generator Tool
                </Typography>
            </Box>
            <Typography
                variant="h6"
                className="about_text_title"
                py={2}
                gutterBottom
                id="aboutUsHeading"
            >
                Abous Us
            </Typography>

            <Box className='about_content_para' id="aboutUsContent">
                {renderHTML(aboutUsContent)}
            </Box>

            <Box className="about_footer_content">
                <Typography>
                    CONTACT
                </Typography>
                <Link1 href="#" variant="body2" underline="always">
                    {'query@nebulamediagroup.com'}
                </Link1>
            </Box>


        </Container>
    )
}
