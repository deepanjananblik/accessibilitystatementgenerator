import React, { useState } from 'react';
import Link from "next/link";
import Helmet from 'react-helmet'
import { useRouter } from 'next/router';
import { Container, Grid, Box, Popover, Typography, IconButton, Checkbox, Button, FormGroup, FormControlLabel } from '@mui/material';


import { useDispatch, useSelector } from "react-redux";

export default function disclaimernotice() {

  const [title, setTitle] = useState('Accessibility statement generator');



  const router = useRouter();

  const dispatch = useDispatch();

  const onClickAnalyzeHandler = () => {
    router.push('/statementgeneratorreport');
  };



  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{title}</title>
      </Helmet>
      <Container sx={{}} maxWidth="100%" disableGutters role="main">

        <Box sx={{ bgcolor: '#ffffff', height: '100vh' }}>

          <Box sx={{
            bgcolor: '#000000',
            height: 80,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

            <Box
              sx={{
                color: '#ffffff',
                fontWeight: '600',
                fontSize: 18,
                textAlign: 'center',
              }}
              role="heading" aria-level="1"
            >
              ACCESSIBILITY STATEMENT GENERATOR
            </Box>

            <Box
              sx={{
                color: '#ffffff',
                fontWeight: '100',
                fontSize: 8,
                letterSpacing: 6,
                textAlign: 'center',
              }}
              role="heading" aria-level="2"
            >
              Online Statement Generator Tool
            </Box>

          </Box>

          <Grid container spacing={0} columns={12}>

            <Grid item xs={2}></Grid>

            <Grid item xs={8}>


              <Box sx={{
                mt: 3,
              }}>
                <Typography sx={{ textAlign: 'center', fontWeight: 600, fontSize: 16, }}>Disclaimer Notice</Typography>
              </Box>

              <Box sx={{
                mt: 4,
              }}>
                <Typography sx={{ fontWeight: 600, fontSize: 15, }}>Please read the following important information before continuing</Typography>
              </Box>

              <Box 
              sx={{
                mt: 1,
                border: 2,
                borderColor: 'gray',
                pl: 2,
                pr: 2,
                pt: 1,
                pb: 1,
                maxHeight: 300,
                minHeight: 200,
                overflowX: 'hidden',
              }}>
                <Typography tabindex="0" sx={{ fontSize: 14, }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
              </Box>

              <Box sx={{
                mt: 1,
              }}>
                <Typography sx={{ fontSize: 12, pl: 1, fontWeight: 'bold' }}><span style={{ fontSize: 16, fontWeight: 900 }}>*</span> This is not a legal document</Typography>
              </Box>


              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 3,
              }}>
                <Button
                  className='buttonSpan'
                  style={{ width: 200, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, }}
                  onClick={onClickAnalyzeHandler} >
                  NEXT
                </Button>
              </Box>


            </Grid>

            <Grid item xs={2}></Grid>
          </Grid>



        </Box>



      </Container >
    </>
  )
}