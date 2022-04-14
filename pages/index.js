import React, { useState } from 'react';
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Helmet from 'react-helmet'
import Link1 from '@mui/material/Link';
import InfoIcon from '@mui/icons-material/Info';
import { Container, Grid, Box, Button, Typography, IconButton, SwipeableDrawer } from '@mui/material';
import AboutUs from './components/AboutUs';

export default function Intro() {

  const [isAbout, setisAbout] = useState(false);
  const [title, setTitle] = useState('Accessibility statement generator');
  const heading = useSelector(state => state.data.heading);

  const router = useRouter();

  const onClickGetStartedHandler = () => {
    router.push('/disclaimernotice');
  };

  const aboutusHandlerClick = () => {
    setisAbout(true);
  }

  const toggleDrawerForAboutUs = () => {
    setisAbout(false);
  };

  const contentOfAboutUs = () => (
    <AboutUs toggleDrawerForAboutUs={toggleDrawerForAboutUs} />
  );

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{title}</title>
      </Helmet>
      <Container sx={{}} maxWidth="100%" disableGutters role="main">

        <Box className='main_container'>

          <Grid container spacing={0} columns={12}>

            <Grid item xs={3}>

              <Box className='bottom_left_img'>
                <img src="../background-left.png.png" alt="" aria-hidden="true" />
              </Box>
            </Grid>

            <Grid item xs={6}>

              <Box className='main_content_section'>
                <Typography
                  role="heading"
                  aria-level="1"
                  className='main_heading_title' >{heading.title}</Typography>

                <Typography
                  role="heading"
                  aria-level="2"
                  className='main_heading_subtitle' >{heading.subtitle}</Typography>

                <Typography
                  className='main_heading_dis' >Take the hassle out of making a statement by quickly and efficiently generating a web accessibility statement for your website. None of the information entered is stored outside of your web browser.</Typography>

                <Button
                  className='start_button'
                  onClick={onClickGetStartedHandler}
                  aria-label="Get Started">
                  Get Started
                </Button>

                <Typography
                  role="heading"
                  aria-level="3"
                  className='maintained_by_text'>Developed and Maintained by</Typography>

                <Box className='logo_view'>
                  <img src="../media-image.png" alt="NEBULA MEDIA GROUP" />
                </Box>

                <Button
                  className='about_button'
                  onClick={aboutusHandlerClick}
                  startIcon={<InfoIcon style={{ color: "#000000", fontSize: 22, }} />}
                  aria-pressed={isAbout}
                  aria-label="about us"
                >
                  About us
                </Button>


              </Box>
            </Grid>

            <Grid item xs={3}>
              <Box
                className='bottom_right_img'>
                <img src="../background-right.png" alt="" aria-hidden="true" />
              </Box>

            </Grid>

          </Grid>
          <SwipeableDrawer
            variant='temporary'
            open={isAbout}
            onClose={() => console.log("calling from about us")}
            onOpen={() => console.log("calling from about us")}
          >

            {contentOfAboutUs()}

          </SwipeableDrawer>

        </Box>

      </Container>
    </>
  )
}
