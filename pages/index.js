import React, { useState } from 'react';
import Link from "next/link"
import { useRouter } from 'next/router';
import Helmet from 'react-helmet'
import Link1 from '@mui/material/Link';
import InfoIcon from '@mui/icons-material/Info';
import { Container, Grid, Box, Button, Typography, IconButton, SwipeableDrawer } from '@mui/material';
import AboutUs from './components/AboutUs';

export default function Intro() {

  const [isAbout, setisAbout] = useState(false);
  const [title, setTitle] = useState('Accessibility statement generator');

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

        <Box sx={{ bgcolor: '#ffffff', height: '100vh' }}>

          <Grid container spacing={0} columns={12}>

            <Grid item xs={3}>

              <Box sx={{
                width: 300,
                height: '100vh',
                display: 'flex',
                alignItems: 'flex-end',
              }}>
                <img src="../background-left.png.png" style={{ width: '100%', }} alt="" aria-hidden="true" />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    color: '#000000',
                    fontWeight: '700',
                    fontSize: 26,
                    textAlign: 'center',
                  }}
                  role="heading"
                  aria-level="1"
                >
                  ACCESSIBILITY STATEMENT GENERATOR
                </Box>

                <Box
                  sx={{
                    color: '#5c5858',
                    fontWeight: '500',
                    fontSize: 13,
                    letterSpacing: 8,
                    pt: 1,
                    pb: 4,
                    textAlign: 'center',
                  }}
                  role="heading"
                  aria-level="2"
                >
                  Online Statement Generator Tool
                </Box>
                <Box
                  sx={{
                    color: '#5c5858',
                    fontSize: 15,
                    pb: 7,
                    textAlign: 'center',
                  }}
                  component="span"
                >
                  Take the hassle out of making a statement by quickly and efficiently generating a web accessibility statement for your website. None of the information entered is stored outside of your web browser.
                </Box>
                <Box>
                  <Button
                    className='buttonSpan'
                    style={{ width: 200, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, }}
                    onClick={onClickGetStartedHandler}
                    aria-label="Get Started">
                    Get Started
                  </Button>
                </Box>

                <Box
                  sx={{
                    color: '#5c5858',
                    fontSize: 14,
                    pt: 4,
                    pb: 4,
                    textAlign: 'center',
                  }}
                  component="span"
                  role="heading"
                  aria-level="3"
                >
                  Developed and Maintained by
                </Box>
                <Box>
                  <img src="../media-image.png" style={{ width: 120, }} alt="NEBULA MEDIA GROUP" />
                </Box>
                <Box sx={{
                  pt: 3,
                }}>
                  <Button
                    className='aboutButtonSpan'
                    onClick={aboutusHandlerClick}
                    style={{ color: '#000000', fontSize: 12, }}
                    startIcon={<InfoIcon style={{ color: "#000000", fontSize: 18, }} />}
                    aria-pressed={isAbout}
                    aria-label="about us"
                  >
                    About us
                  </Button>
                </Box>

              </Box>
            </Grid>

            <Grid item xs={3}>
              <Box sx={{
                width: '100%',
                pl: 7,
                height: '100vh',
                display: 'flex',
                alignItems: 'flex-end',
              }}>
                <img src="../background-right.png" style={{ width: '100%', }} alt="" aria-hidden="true" />
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
