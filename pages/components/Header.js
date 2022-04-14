import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet'
import { Box, Typography } from '@mui/material';
import { useSelector } from "react-redux";

export default function Header() {

    const [isAbout, setisAbout] = useState(false);
    const heading = useSelector(state => state.data.heading);

    return (
        <>
            <Helmet htmlAttributes={{ lang: 'en' }}>
                {/* <title>{title}</title> */}
            </Helmet>

            <Box
                className='header_section_for_header'>
                <Typography
                    className='title_for_header'
                    role="heading"
                    aria-level="1"
                >
                    {heading.title}
                </Typography>

                <Typography
                    className='subtitle_for_header'
                    role="heading"
                    aria-level="2"
                >
                    {heading.subtitle}
                </Typography>

            </Box>


        </>
    )
}
