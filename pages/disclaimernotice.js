import React, {useState} from 'react';
import Link from "next/link";
import Helmet from 'react-helmet'
import { useRouter } from 'next/router';
import Header from './components/Header';
import { Container, Grid, Box, Typography, Button, } from '@mui/material';


import { useDispatch, useSelector } from "react-redux";

export default function DisclaimerNotice() {

  const [title, setTitle] = useState('Accessibility Statement Generator');
  const heading = useSelector(state => state.data.heading);



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

          <Header />

          <Grid container spacing={0} columns={12}>

            <Grid item xs={2}></Grid>

            <Grid item xs={8}>


              <Box>
                <Typography className='disclaimer_title'>Disclaimer Notice</Typography>
                <Typography className='disclaimer_subtitle'>Please read the following important information before continuing</Typography>
              </Box>

              <Box
                className='disclaimer_discription_container'>
                <Typography tabindex="0">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </Typography>
              </Box>

              <Box>
                <Typography className='legal_document_text'><span>*</span> This is not a legal document.</Typography>
              </Box>


              <Box 
              className='next_button_section'>
                <Button
                  className='start_button'
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
