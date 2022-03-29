import React, { useState, useEffect } from 'react';
import Link1 from '@mui/material/Link';
import Helmet from 'react-helmet';
import { useRouter } from 'next/router';
import {
  Container,
  Grid,
  Box,
  Modal,
  Input,
  Popover,
  Typography,
  IconButton,
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
  SwipeableDrawer,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  RadioGroup,
  Radio
} from '@mui/material';


import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InfoIcon from '@mui/icons-material/Info';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';

import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import { useDispatch, useSelector } from "react-redux";
import AboutUs from './components/AboutUs';
import { width, styled } from '@mui/system';
import { getRgbaValue } from '@hbis/color';



export default function StatementGeneratorReport() {
  const router = useRouter();
  const [isAbout, setisAbout] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [modal, setModal] = useState(false);
  const [popEl, setPopEl] = useState(null);
  const openPop = Boolean(popEl);
  const idpop = openPop ? 'simple-popover' : undefined;
  const ariaLabel = { 'aria-label': 'description' };

  const [title, setTitle] = useState('Accessibility statement generator');


  const dispatch = useDispatch();


  const aboutusHandlerClick = () => {
    setisAbout(true);
  }

  const toggleDrawerForAboutUs = () => {
    setisAbout(false);
  };

  const contentOfAboutUs = () => (
    <AboutUs toggleDrawerForAboutUs={toggleDrawerForAboutUs} />
  );
  const accordionHandleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log('hello2');
  };

  const handleCloseModal = () => setModal(false);
  const handleOpenModal = () => setModal(true);

  const infoHandle = (event) => {
    setPopEl(event.currentTarget);
    // setPop(1);
  };
  const onClickSBCCloseHandler = () => {
    setPopEl(false);
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{title}</title>
      </Helmet>
      <Container sx={{}} maxWidth="100%" disableGutters role="main">

        <Box sx={{ bgcolor: '#f4f4f4', height: '100vh', display: 'flex', flexDirection: 'column', }}>

          <Box sx={{
            position: 'relative',
            bgcolor: '#000000',
            height: 80,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >

            <Box
              sx={{
                color: '#ffffff',
                fontWeight: '600',
                fontSize: 18,
                textAlign: 'center',
              }}
              role="heading"
              aria-level="1"
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
              role="heading"
              aria-level="2"
            >
              Online Statement Generator Tool
            </Box>
          </Box>

          <Box sx={{ width: '100%', flex: 1, }}>

            <Grid container spacing={0} columns={12} sx={{ height: '100%', }}>

              <Grid item xs={6}>


                <Box sx={{ height: '100%', display: 'flex' }}>

                  <Box sx={{
                    width: '100%',
                    p: 3,
                    height: 'calc(100vh - 80px)',
                    overflowX: 'hidden',
                  }}>

                    <Accordion
                      expanded={expanded === 'panel1'} className='accordionSummaryView' onChange={accordionHandleChange('panel1')}
                    >
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Box sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          width: '100%'
                        }}>
                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',

                          }}>
                            <IconButton
                              id="plusIcon1"
                              className='exportButton'
                              aria-label="plus Icon button one"
                              size="small"
                            >
                              {expanded === 'panel1' ?
                                <RemoveIcon fontSize={'large'} sx={{ color: '#000000' }} />
                                :
                                <AddIcon fontSize={'large'} sx={{ color: '#000000' }} />
                              }
                            </IconButton>



                            <Box sx={{ ml: 2 }}>

                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                              }}>

                                <Typography sx={{ fontSize: 16, fontWeight: '600', pr: 0.3, color: '#000000' }}>Basic information</Typography>
                                <IconButton className='basicButton' color="primary" aria-label="Basic-information" size="small" onClick={infoHandle}>
                                  <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                </IconButton>
                              </Box>
                              <Typography sx={{ color: '#63634e', fontSize: 12, mt: -0.7 }}><span style={{ fontSize: 14, }}>*</span> Required field</Typography>

                            </Box>

                          </Box>

                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                          }}>
                            <img src="../right.png" style={{ width: 25, }} alt="" aria-hidden="true" />
                          </Box>

                        </Box>


                      </AccordionSummary>

                      <AccordionDetails>

                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                            <Typography sx={{ fontSize: 15, color: '#000000', pr: 0.5 }}><span style={{ color: 'red' }}>*</span> Company or organization name</Typography>
                            <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input type='text' defaultValue="Lorem ipsum dolor" inputProps={ariaLabel} fullWidth={true} className="inputControl" />
                        </Box>

                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                            <Typography sx={{ fontSize: 15, color: '#000000', pr: 0.5 }}><span style={{ color: 'red' }}>*</span> Website or mobile application URL</Typography>
                            <IconButton color="primary" aria-label={'Website-URL'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input type='text' defaultValue="loremipsumdolor.com" inputProps={ariaLabel} fullWidth={true} className="inputControl" />
                        </Box>

                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', }}>
                            <Typography sx={{ fontSize: 15, color: '#000000', pr: 0.5 }}><span style={{ color: 'red' }}>*</span> What accessibility standard does your site currently adhere to ?</Typography>
                            <IconButton color="primary" aria-label={'accessibility-standard'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <RadioGroup
                            row
                            aria-label="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel value="A" control={<Radio />} label="A" />
                            <FormControlLabel value="AA" control={<Radio />} label="AA" />
                            <FormControlLabel value="AAA" control={<Radio />} label="AAA" />
                          </RadioGroup>

                        </Box>

                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', }}>
                            <Typography sx={{ fontSize: 15, color: '#000000', pr: 0.5 }}>What accessibility level does your site currently adhere to ?</Typography>
                            <IconButton color="primary" aria-label={'accessibility-level'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <RadioGroup
                            row
                            aria-label="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel value="2.0" control={<Radio />} label="2.0" />
                            <FormControlLabel value="2.1" control={<Radio />} label="2.1" />
                          </RadioGroup>

                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                          <Box sx={{ flex: 1, mr: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                              <Typography sx={{ fontSize: 15, color: '#000000', pr: 0.5 }}><span style={{ color: 'red' }}>*</span> Phone no i.e. +12345678900</Typography>
                              <IconButton color="primary" aria-label={'Phone-no'} component="span" size="small" onClick={infoHandle}>
                                <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                              </IconButton>
                            </Box>

                            <Input type='text' defaultValue="+91 9831098310" inputProps={ariaLabel} fullWidth={true} className="inputControl" />
                          </Box>

                          <Box sx={{ flex: 1, ml: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                              <Typography sx={{ fontSize: 15, color: '#000000', pr: 0.5 }}><span style={{ color: 'red' }}>*</span> E-mail i.e. lorem@example.org</Typography>
                              <IconButton color="primary" aria-label={'E-mail'} component="span" size="small" onClick={infoHandle}>
                                <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                              </IconButton>
                            </Box>

                            <Input type='email' defaultValue="lorem.ipsum@company.com" inputProps={ariaLabel} fullWidth={true} className="inputControl" />
                          </Box>

                        </Box>


                      </AccordionDetails>
                    </Accordion>

                    <Accordion
                      expanded={expanded === 'panel2'} className='accordionSummaryView' onChange={accordionHandleChange('panel2')}
                    >
                      <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Box sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          width: '100%'
                        }}>
                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                          }}>

                            <IconButton
                              id="plusIcon2"
                              className='exportButton'
                              aria-label="plus Icon button two"
                              size="small"
                            >
                              {expanded === 'panel2' ?
                                <RemoveIcon fontSize={'large'} sx={{ color: '#000000' }} />
                                :
                                <AddIcon fontSize={'large'} sx={{ color: '#000000' }} />
                              }
                            </IconButton>

                            <Box sx={{ ml: 2 }}>

                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                              }}>

                                <Typography sx={{ fontSize: 16, fontWeight: '600', pr: 0.3, color: '#000000' }}>Organizational Measures</Typography>
                                <IconButton color="primary" aria-label={'Organizational-Measures'} size="small" onClick={infoHandle}>
                                  <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                </IconButton>
                              </Box>
                              <Typography sx={{ color: '#63634e', fontSize: 12, mt: -0.7 }}><span style={{ fontSize: 14, }}>*</span> Required field</Typography>

                            </Box>

                          </Box>

                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                          }}>
                            <img src="../wrong.png" style={{ width: 25, }} alt="" aria-hidden="true" />
                          </Box>

                        </Box>


                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                  </Box>

                </Box>

              </Grid>



              <Grid item xs={6}>

                <Box sx={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  height: 'calc(100vh - 80px)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}>

                  <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.67)',
                    top: 0,
                    left: 0,
                    zIndex: 9,
                    display: 'none',
                  }} />


                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                    <Box sx={{
                      width: 280,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 2,
                      mr: 4,
                      //background: 'gray'
                    }}>

                      <IconButton
                        id="Clipboard"
                        className='exportButton'
                        aria-label="Copy to clipboard button"
                        style={{
                          width: 60,
                          height: 60,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 50,
                          color: '#000000',
                          fontSize: 9,
                        }}
                        component="span" size="small"
                      //onClick={ExportEXCEL}
                      >
                        <ContentCopyIcon style={{ color: "#000000", fontSize: 20, }} />
                        COPY TO CLIPBOARD
                      </IconButton>



                      <Box sx={{
                        width: 1.1,
                        height: 35,
                        backgroundColor: '#cccccc',
                        ml: 1,
                        mr: 1,
                      }}>

                      </Box>


                      <IconButton
                        id="PDF-Export"
                        className='exportButton'
                        aria-label="PDF Export button"
                        style={{
                          width: 60,
                          height: 60,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#000000',
                          fontSize: 10,
                        }}
                        component="span" size="small"
                      //onClick={ExportPDF}

                      >
                        <PictureAsPdfIcon style={{ color: "#000000", fontSize: 20, }} />
                        PDF EXPORT
                      </IconButton>


                      <IconButton
                        id="share-drive"
                        className='exportButton'
                        aria-label="share-drive button"
                        //aria-pressed={shereOpen}
                        style={{
                          color: '#000000',
                          fontSize: 10,
                          width: 60,
                          height: 60,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        component="span"
                        size="small"
                      //onClick={handleShareOpen}
                      >
                        <AddToDriveIcon style={{ color: "#000000", fontSize: 20, }} />
                        SHARE IN DRIVE
                      </IconButton>

                      <IconButton
                        id="about-us"
                        className='exportButton'
                        aria-label="about us button"
                        aria-pressed={isAbout}
                        style={{
                          color: '#000000',
                          fontSize: 10,
                          width: 56,
                          height: 56,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        component="span"
                        size="small"
                        onClick={aboutusHandlerClick}
                      >
                        <InfoIcon style={{ color: "#000000", fontSize: 20, }} />
                        ABOUT US
                      </IconButton>



                    </Box>

                  </Box>

                  <Box sx={{ flex: 1, p: 4, overflow: 'auto', }}>

                    {/* <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="../empty.png" style={{ width: 80, }} alt="" aria-hidden="true" />
                    </Box> */}

                    <Box sx={{ display: 'block' }}>
                      <Box>
                        <Typography sx={{ fontSize: 14, fontColor: "#000000" }}>Our Aim</Typography>
                        <Typography sx={{ fontSize: 14, fontColor: "#000000", pt: 2 }}>Lorem Ipsum Dolor is committed to ensuring digital accessibility for people with disabilities. We continue to make changes to improve the user experience for everyone and apply the relevant accessibility standards.</Typography>
                        <Typography sx={{ fontSize: 14, fontColor: "#000000", pt: 1.5, pb: 1.5 }}>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.</Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: 14, fontColor: "#000000", pb: 2, }}>Wherever possible, Lorem Ipsum Dolor will aim to adhere to level AA of the WCAG 2.0 guidelines, which states that sites should be:</Typography>
                        <ul style={{ margin: 0, paddingLeft: 18 }}>
                          <li style={{ fontSize: 14, fontColor: "#000000", paddingBottom: 10, }}>Perceivable - Information and user interface components must be presentable to users in ways they can perceive.</li>
                          <li style={{ fontSize: 14, fontColor: "#000000", paddingBottom: 10, }}>Operable - User interface components and navigation must be operable.</li>
                          <li style={{ fontSize: 14, fontColor: "#000000", paddingBottom: 10, }}>Understandable - Information and the operation of user interface must be understandable.</li>
                          <li style={{ fontSize: 14, fontColor: "#000000", paddingBottom: 10, }}>Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
                        </ul>
                      </Box>

                      <Box>
                        <Typography sx={{ fontSize: 14, fontColor: "#000000", pt: 2 }}>Phone: +91 9831098310</Typography>
                        <Typography sx={{ fontSize: 14, fontColor: "#000000", pb: 1.5 }}>E-mail: lorem.ipsum@company.com</Typography>
                      </Box>

                    </Box>

                  </Box>

                  <Box sx={{ textAlign: 'center', pb: 3 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 600, pb: 2, pt: 2 }}>Too read full statement click here</Typography>
                    <Button
                      className='buttonSpan'
                      onClick={handleOpenModal}
                      style={{ width: 200, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, fontWeight: 600 }}
                    >
                      FULL PREVIEW
                    </Button>
                  </Box>

                </Box>

              </Grid>

            </Grid>

          </Box>


        </Box>

        <SwipeableDrawer
          variant='temporary'
          open={isAbout}
          onClose={() => console.log("calling from about us")}
          onOpen={() => console.log("calling from about us")}
        >

          {contentOfAboutUs()}

        </SwipeableDrawer>

        <Modal
          className="modalStyle"
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={modal}
          onClose={handleCloseModal}
        // BackdropComponent={Backdropl}
        >
          <Box className='modalMainView'>

            <Box
              sx={{ position: 'absolute', top: 0, right: 0, display: 'flex', }}
              role="presentation"
            >
              <Box sx={{
                width: 50,
                height: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 1,
                mr: 2,
              }}>
                <IconButton
                  id="Clipboard2"
                  className='exportButton'
                  aria-label="Clipboard button"
                  style={{ color: '#000000', fontSize: 10, flexDirection: 'column', }}
                  component="span" size="small"
                //onClick={ExportEXCEL}
                >
                  <ContentCopyIcon style={{ color: "#000000", fontSize: 20, }} />
                  COPY TO CLIPBOARD
                </IconButton>

              </Box>

              <IconButton
                id="close-button"
                color="primary"
                component="span"
                aria-label="close button"
                onClick={handleCloseModal}
                aria-controls={modal ? 'close-button' : undefined}
                aria-haspopup="true"
                aria-expanded={modal ? 'true' : undefined}
              >
                <CloseIcon style={{ color: "#000000", fontSize: 35, }} />
              </IconButton>
            </Box>

            <Box sx={{}}>
              <Typography sx={{ color: '#000000', fontSize: 14, textAlign: 'center', fontWeight: 600 }}>STATEMENT IN FULL PREVIEW MODE</Typography>
            </Box>

            <Box sx={{ mt: 4, flex: 1, overflowX: 'hidden', pl: 3, pr: 2, }}>
              <Typography sx={{ fontSize: 20, fontWeight: 600, color: "#000000" }}>Accessibility statement - Lorem Ipsum</Typography>
              <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#000000", pb: 2 }}>URL: loremipsum.com</Typography>
              <Typography sx={{ fontSize: 12, color: "#000000", pb: 2 }}>Lorem Ipsum is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#000000", pt: 1 }}>Efforts to support accessibility</Typography>
              <Typography sx={{ fontSize: 12, color: "#000000", pb: 2, pt: 2 }}>Lorem Ipsum takes the following measures to ensure accessibility:</Typography>
              <Typography sx={{ fontSize: 12, color: "#000000", }}>Accessibility is part of our mission statement.</Typography>
              <Typography sx={{ fontSize: 12, color: "#000000", }}>Accessibility is part of our internal policies.</Typography>
              <Typography sx={{ fontSize: 12, color: "#000000", }}>Accessibility is integrated into our procurement practices.</Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#000000", pt: 2, pb: 2, }}>Conformance status</Typography>
              <Typography sx={{ fontSize: 12, color: "#000000", }}>Current accessibility standard of the site:</Typography>
              <Typography sx={{ fontSize: 12, color: "#000000", }}>WCAG 2.1 level AA</Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#000000", pt: 2, pb: 2, }}>Current content conformance status:</Typography>
              <Typography sx={{ fontSize: 12, color: "#000000", }}>Partially conformant: some parts of the content do not fully conform to the accessibility standard.</Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#000000", pt: 2, pb: 2, }}>Compatibility with browsers and assistive technology</Typography>
              <Typography sx={{ fontSize: 12, color: "#000000", }}>This site is designed to be compatible with the following browsers:</Typography>

              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 3,
              }}>
                <Button
                  className='buttonSpan'
                  style={{ width: 200, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, fontWeight: 600 }}
                //onClick={onClickAnalyzeHandler} 
                >
                  COPY TO CLIPBOARD
                </Button>
              </Box>

            </Box>

          </Box>

        </Modal>

        <Popover
          id={idpop}
          open={openPop}
          anchorEl={popEl}
          onClose={onClickSBCCloseHandler}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          PaperProps={{
            style: { width: '20%', height: 'auto', },
          }}
        >
          <Typography sx={{ p: 1 }} variant="body2" gutterBottom>lorem ipsum dolor</Typography>
        </Popover>

      </Container>
    </>
  )
}
