import React, { useState, createRef, useEffect } from 'react';
import Helmet from 'react-helmet';
import Header from './components/Header';
import ChangeHighlight from "react-change-highlight";
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
  Radio,
  Link,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import FolderIcon from '@mui/icons-material/Folder';
import InfoIcon from '@mui/icons-material/Info';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  addCompanyName,
  addWebsiteURL,
  addDate,
  addExistingEfforts,
  addAdditionalEfforts,
  onChangeAddExistingEfforts,
  removeExistingEfforts,
  addAccessibilityStandar,
  addAccessibilityLevel,
  addConformanceStatus,
  addAccessibility,
  removeAccessibility,
  onChangeAddAccessibilityVideoTitle,
  onChangeAddAccessibilityDiscription,
  addBrowser,
  removeBrowser,
  onchangeAddBrowser,
  addAssistiveTechnologies,
  removeAssistiveTechnologies,
  onchangeAssistiveTechnologies,
  addExistingTechnologies,
  addAnotherTechnologies,
  removeAnotherTechnologies,
  onChangeAddAnotherTechnologies,
  addExistingAssessmentMethod,
  addAnotherAssessmentMethod,
  onchangeAddAnotherAssessmentMethod,
  removeAnotherAssessmentMethod,
  addAccessibilityEvaluationReports,
  addPhoneNo,
  addEmailAddress,
  addPostalAddress,
  addResponseTime,
  addFormalComplaints,
  addPersoneName,
  addJobTitle
} from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import AboutUs from './components/AboutUs';
import { GoogleLogin } from 'react-google-login';
import Preloader from './components/Preloader';

export default function StatementGeneratorReport() {
  const [isAbout, setisAbout] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [modal, setModal] = useState(false);
  const [popEl, setPopEl] = useState(false);
  const openPop = Boolean(popEl);
  const idpop = openPop ? 'simple-popover' : undefined;
  const ariaLabel = { 'aria-label': 'description' };
  const [title, setTitle] = useState('Accessibility statement generator');

  const [ispath, setIspath] = useState('');

  const [isPreloaderOn, setIsPreloaderOn] = useState(false);
  const [preloaderCaption, setPreloaderCaption] = useState("Loading...");
  const [copied, setCopied] = useState(false);
  const [isGoogleDriveExportOptionClicked, setIsGoogleDriveExportOptionClicked] = useState(false);
  const [isToken, setIsToken] = useState('');
  const [driveFolderModal, setDriveFolderModal] = useState(false);
  const [isMetadata, setIsMetadata] = useState('');
  const [driveFolder, setDriveFolder] = useState([]);
  const [msgDialogOpen, setMsgDialogOpen] = useState(false);
  const [msgDialog, setMsgDialog] = useState({ title: "", description: "" });

  const aboutUsContent = useSelector(state => state.data.aboutUsContent);
  const reportList = useSelector(state => state.data.report);
  const accessibilityStandardArray = useSelector(state => state.data.accessibility);
  const assessmentMethodSiteList = useSelector(state => state.data.assessmentMethodSite);
  const assessmentList = useSelector(state => state.data.report.assessmentMethod.assessment);
  const assessmentRecentReport = useSelector(state => state.data.report.assessmentMethod.assessmentRecentReport);
  const accessibilityLevelArray = useSelector(state => state.data.accessibilityLevel);
  const currentContentConformanceStatus = useSelector(state => state.data.currentContentConformanceStatus);
  const organizationWebAccessibilityList = useSelector(state => state.data.organizationWebAccessibility);
  const organizational_items_heading = "In order to ensure accessibility we also:";
  const technologiesNameList = useSelector(state => state.data.technologiesName);
  const companyName = useSelector(state => state.data.report.basicInformation.companyName);
  const websiteUrl = useSelector(state => state.data.report.basicInformation.applicationURL);
  const date = useSelector(state => state.data.report.basicInformation.statementGeneratedDate);
  const yourEffortsList = useSelector(state => state.data.report.yourEfforts);
  const conformance = useSelector(state => state.data.report.conformanceStatus);
  const accessibilityStandard = useSelector(state => state.data.report.conformanceStatus.accessibilityStandard);
  const accessibilityLevelSite = useSelector(state => state.data.report.conformanceStatus.accessibilityLevelSite);
  const currentContent = useSelector(state => state.data.report.conformanceStatus.currentContent);
  const conformanceStatus = useSelector(state => state.data.report.conformanceStatus.currentContent);
  const knownAccessibilityIssuesList = useSelector(state => state.data.report.knownAccessibilityIssues);
  const browsersList = useSelector(state => state.data.report.technicalSpecification.browsers);
  const assistiveTechnologiesList = useSelector(state => state.data.report.technicalSpecification.assistiveTechnologies);
  const technologiesList = useSelector(state => state.data.report.technicalSpecification.technologies);
  const phoneNo = useSelector(state => state.data.report.feedBack.phoneNumber);
  const email = useSelector(state => state.data.report.feedBack.emailAddress);
  const postal = useSelector(state => state.data.report.feedBack.postalAddress);
  const responseTime = useSelector(state => state.data.report.feedBack.responseTime);
  const complaintsName = useSelector(state => state.data.report.feedBack.complaintsName);
  const personName = useSelector(state => state.data.report.feedBack.departmentName);
  const jobTitle = useSelector(state => state.data.report.feedBack.JobTitle);

  const dispatch = useDispatch();


  ///////////////////////////////////// Basic information /////////////////////////////////////////

  //company Name
  const changeCompanyName = (event) => {
    dispatch(addCompanyName({ target: event.target.value }));
  };

  //Website or mobile application URL
  const changeWebsiteUrl = (event) => {
    dispatch(addWebsiteURL({ target: event.target.value }));
  };

  // set date
  const dateHandleChange = (event) => {
    dispatch(addDate({ target: event.target.value }));

  };

  //////////////////////////////// Your Efforts /////////////////////////////////////////////////////

  // Add/Remove checked item from list
  const handleCheck = (event, i) => {
    dispatch(addExistingEfforts({ target: event.target.value, check: event.target.checked, index: i }));
  };

  //add an Additional Effort
  const addAdditionalEffort = () => {
    console.log("from addAdditionalEffort method > Length  : " + organizationWebAccessibilityList.length);
    dispatch(addAdditionalEfforts({ type: 'inputtextbox', index: organizationWebAccessibilityList.length }));
  };

  // on change update an Additional effort 
  const addEfforts = (event, index) => {
    console.log("from addEfforts method > index " + index);
    dispatch(onChangeAddExistingEfforts({ target: event.target.value, index: index }));
  }

  // remove an Additional effort 
  const removeAdditionalEffort = (event, index) => {
    console.log("from removeAdditionalEffort method > index " + index);
    dispatch(removeExistingEfforts({ index: index }));
  }

  /////////////////////////////Conformance Status////////////////////////////////

  //accessibility standard

  const accessibilityStandarHandler = (event) => {
    dispatch(addAccessibilityStandar({ target: event.target.value }));
  }

  //accessibility level

  const accessibilityLevelHandler = (event) => {
    // setAccessibilityLevel(event.target.value);
    dispatch(addAccessibilityLevel({ target: event.target.value }));
  }
  //Current content conformance status
  const conformanceStatusHandler = (event) => {
    //setConformanceStatus(event.target.value);
    dispatch(addConformanceStatus({ target: event.target.value }));
  }

  //add a Known accessibility

  const addAccessibilityHandaler = () => {

    dispatch(addAccessibility({ index: knownAccessibilityIssuesList.length }));

  };

  //remove a Known accessibility
  const removeAccessibilityHandaler = (e, i) => {
    dispatch(removeAccessibility({ index: i }));
  }

  //Issues Title

  const issuesTitleHandaler = (event, index) => {
    dispatch(onChangeAddAccessibilityVideoTitle({ target: event.target.value, index: index }));
  };

  //Issues Description
  const issuesDescriptionHandaler = (event, index) => {
    dispatch(onChangeAddAccessibilityDiscription({ target: event.target.value, index: index }));
  };


  /////////////////////////////Technical Specifications////////////////////////////////

  //add Browser
  const addBrowserHandaler = () => {
    dispatch(addBrowser({ index: browsersList.length }));
  }

  //remove Browser
  const removeBrowserHandler = (e, index) => {
    dispatch(removeBrowser({ index: index }));
  }

  //onChange Browser
  const onChangeBrowserHandler = (event, index) => {

    dispatch(onchangeAddBrowser({ target: event.target.value, index: index }));

  }

  //add Assistive

  const addAssistiveHandler = () => {
    dispatch(addAssistiveTechnologies({ index: assistiveTechnologiesList.length }));
  }
  //onChange Assistive
  const onChangeAssistiveHandler = (event, index) => {
    dispatch(onchangeAssistiveTechnologies({ target: event.target.value, index: index }));
  }
  //Remove Assistive Handler
  const removeAssistiveHandler = (e, index) => {
    dispatch(removeAssistiveTechnologies({ index: index }));
  }


  // Add/Remove Technologies Check item from list

  const technologiesCheck = (event, i) => {
    dispatch(addExistingTechnologies({ target: event.target.value, check: event.target.checked, index: i }));
  }

  //add Technologies Handler

  const addTechnologiesHandler = () => {
    dispatch(addAnotherTechnologies({ type: 'inputtextbox', index: technologiesNameList.length }));
  }

  const onChangeAddTechnologies = (event, index) => {
    dispatch(onChangeAddAnotherTechnologies({ target: event.target.value, index: index }));
  }

  //remove Technologies Handler
  const removeTechnologiestHandler = (e, index) => {
    dispatch(removeAnotherTechnologies({ index: index }));
  }

  /////////////////////////////Assessment Methods////////////////////////////////

  // Add/Remove Assessment Check item from list
  const assessmentCheck = (event, index) => {
    dispatch(addExistingAssessmentMethod({ target: event.target.value, check: event.target.checked, index: index }));
  }

  //add Assessment
  const addAssessmentHandler = () => {
    dispatch(addAnotherAssessmentMethod({ type: 'inputtextbox', index: assessmentMethodSiteList.length }));
  }

  //onChange add Assessment Handler
  const onChangeAddAssessment = (event, index) => {
    dispatch(onchangeAddAnotherAssessmentMethod({ target: event.target.value, index: index }));
  }

  //remove Assessment Handler

  const removeAssessmentHandler = (e, index) => {
    dispatch(removeAnotherAssessmentMethod({ index: index }));
  }

  //change Accessibility Reports
  const changeAccessibilityReports = (event) => {
    dispatch(addAccessibilityEvaluationReports({ target: event.target.value }));
  }

  /////////////////////////////Feedback Process////////////////////////////////

  //Phone No.

  const changePhoneNo = (event) => {
    dispatch(addPhoneNo({ target: event.target.value }));
  }

  // Email

  const changeEmail = (event) => {
    dispatch(addEmailAddress({ target: event.target.value }));
  }

  // postal address
  const changePostalAddress = (event) => {
    dispatch(addPostalAddress({ target: event.target.value }));
  }

  // response time
  const changeResponseTime = (event) => {
    dispatch(addResponseTime({ target: event.target.value }));
  }

  // complaints
  const changeComplaints = (event) => {
    dispatch(addFormalComplaints({ target: event.target.value }));
  }
  // person or department name
  const changePersonName = (event) => {
    dispatch(addPersoneName({ target: event.target.value }));
  }

  // Job title
  const changeJobTitle = (event) => {
    dispatch(addJobTitle({ target: event.target.value }));
  }


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
    // setIsOver(true);
  };

  const handleCloseModal = () => setModal(false);
  const handleOpenModal = () => setModal(true);


  const infoHandle = (event) => {
    event.stopPropagation();
    setPopEl(event.currentTarget);
  };
  const onClickSBCCloseHandler = () => {
    setPopEl(false);
  };

  //const copiedData = `Accessibility statement - ${companyName ? companyName : 'Org name'}\r\n ${websiteUrl ? "URL:" : ''} ${websiteUrl ? websiteUrl : ''}\r\nOrg name is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards. \r\nEfforts to support accessibility \r\n${companyName ? companyName : 'Org name'}osss takes the following measures to ensure accessibility: \r\n${yourEffortsList.map((item) => ('• ' + item.value + '\n'))}Conformance status\r\nCurrent accessibility standard of the site:WCAG \r\n${accessibilityLevelSite} level ${accessibilityStandard}\r\nCurrent content conformance status:\r\n${currentContent}\r\n${knownAccessibilityIssuesList.map((item) => (item.title + '\r\n'+ 'Despite our best efforts users may experience some issues. This is a description of known accessibility issues. Please contact us if you observe an issue that is not listed.' + item.videotitle + '\r\n' + item.discription))}\r\n`;

  let copiedData = `<div style="padding:20px">
      <h2 style="margin:0px;font-size: 24px;font-weight: 600;color: #000000;font-family: sans-serif;">Accessibility statement - ${companyName ? companyName : '{Org name}'}</h2>
      <h5 style="margin:0px;font-size: 16px;font-weight: 600;color: #000000;font-family: sans-serif;padding-bottom:15px;padding-top:10px;display:${websiteUrl ? 'block' : 'none'};">URL: ${websiteUrl}</h5>
      <p style="margin:0px;font-size: 14px;color: #000000;font-family: sans-serif;padding-bottom:15px;padding-top:5px;">${companyName ? companyName : '{Org name}'} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>
      <h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px;display:${yourEffortsList.length > 0 ? 'block' : 'none'};">Efforts to support accessibility</h3>
      <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px;display:${yourEffortsList.length > 0 ? 'block' : 'none'};">${companyName ? companyName : '{Org name}'} takes the following measures to ensure accessibility:</p>
      <ul style="padding-left:20px">`;

  yourEffortsList.map((item, index) => (
    copiedData += `<li style="font-size: 14px;color: #000000;font-family: sans-serif;padding:1px 0px">${item.value}</li>`
  ));

  copiedData += `</ul>
      <h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px;display:${accessibilityLevelSite || accessibilityStandard ? 'block' : 'none'};">Conformance status</h3>
      <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px;display:${accessibilityLevelSite || accessibilityStandard ? 'block' : 'none'};">Current accessibility standard of the site:</p>
      <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px;display:${accessibilityLevelSite || accessibilityStandard ? 'block' : 'none'};">WWCAG ${accessibilityLevelSite ? accessibilityLevelSite : 'undefined'} level ${accessibilityStandard ? accessibilityStandard : 'undefined'}</p>
      <h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px;display:${currentContent ? 'block' : 'none'};">Conformance status</h3>
      <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px;display:${currentContent ? 'block' : 'none'};">${currentContent}</p>`;

  knownAccessibilityIssuesList[0].videotitle != "" || knownAccessibilityIssuesList[0].discription != "" ?
    copiedData += `<h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px">Known accessibility issues</h3>
          <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px">Despite our best efforts users may experience some issues. This is a description of known accessibility issues. Please contact us if you observe an issue that is not listed.</p>`
    : null

  knownAccessibilityIssuesList.map((item, index) => (
    copiedData += `
          <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px">${item.videotitle}:</p>
          <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px">${item.discription}</p>`
  ));
  copiedData += `<h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px;display:${browsersList[0].value != '' || assistiveTechnologiesList[0].value != '' ? 'block' : 'none'};">Compatibility with browsers and assistive technology</h3>`

  copiedData += `<div style="display:${browsersList[0].value != '' ? 'block' : 'none'};">
      <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px">This site is designed to be compatible with the following browsers:</p>
        
        <ul style="padding-left:20px">`
  browsersList.map((item, index) => (
    copiedData += `<li style="font-size: 14px;color: #000000;font-family: sans-serif;padding:1px 0px">${item.value}</li>`
  ));
  copiedData += `</ul>
  
        </div>

        <div style="display:${assistiveTechnologiesList[0].value != '' ? 'block' : 'none'};">
      <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px">This site is designed to be compatible with the following assistive technologies:</p>
        
        <ul style="padding-left:20px">`
  assistiveTechnologiesList.map((item, index) => (
    copiedData += `<li style="font-size: 14px;color: #000000;font-family: sans-serif;padding:1px 0px">${item.value}</li>`
  ));
  copiedData += `</ul>
  
        </div>
        <div style="display:${technologiesList.length > 0 ? 'block' : 'none'};">
        <h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px;">Technologies</h3>
        <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px">This site is designed to be compatible with the following assistive technologies:</p>
          
          <ul style="padding-left:20px">`
  technologiesList.map((item, index) => (
    copiedData += `<li style="font-size: 14px;color: #000000;font-family: sans-serif;padding:1px 0px">${item.value}</li>`
  ));
  copiedData += `</ul>
    
          </div>

          <div style="display:${assessmentList.length > 0 ? 'block' : 'none'};">
          <h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px;">Assessment methods</h3>
          <p style="font-size: 14px;color: #000000;font-family: sans-serif;padding:10px 0px">${companyName ? companyName : '{Org name}'} assessed the accessibility of this site using the following method(s):</p>
            
            <ul style="padding-left:20px">`
  assessmentList.map((item, index) => (
    copiedData += `<li style="font-size: 14px;color: #000000;font-family: sans-serif;padding:1px 0px">${item.value}</li>`
  ));
  copiedData += `</ul>
      
            </div>

            <div style="display:${phoneNo.length > 0 || email.length > 0 || postal.length > 0 || responseTime.length > 0 ? 'block' : 'none'};">
            <h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px;">Feedback process</h3>
            
            <ul style="padding-left:20px">
            <li style="font-size: 14px;color: #000000;font-family: sans-serif;padding:1px 0px;display:${phoneNo.length > 0 ? 'list-item' : 'none'};">Phone: ${phoneNo}</li>
            <li style="font-size: 14px;color: #000000;font-family: sans-serif;padding:1px 0px;display:${email.length > 0 ? 'list-item' : 'none'};">E-mail: ${email}</li>
            <li style="font-size: 14px;color: #000000;font-family: sans-serif;padding:1px 0px;display:${postal.length > 0 ? 'list-item' : 'none'};">Postal Address: ${postal}</li>
            </ul>
            <p style="font-size: 15px;color: #000000;font-family: sans-serif;padding:10px 0px;display:${responseTime.length > 0 ? 'block' : 'none'};"> We aim to respond to feedback within ${responseTime}.</p>
            </div>


            <div style="display:${complaintsName.length > 0 ? 'block' : 'none'};">
            <h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px;">Formal complaints</h3>
            <p style="font-size: 15px;color: #000000;font-family: sans-serif;padding:10px 0px;"> We aim to respond to feedback within ${complaintsName}.</p>
            </div>

            <div style="display:${personName.length > 0 || jobTitle.length > 0 ? 'block' : 'none'};">
            <h3 style="margin:0px;font-size: 20px;font-weight: 600;color: #000000;font-family: sans-serif;padding-top:10px;">Formal approval of this accessibility statement</h3>
            <p style="font-size: 15px;color: #000000;font-family: sans-serif;padding:5px 0px;">This accessibility statement is approved by:</p>
            <p style="font-size: 15px;color: #000000;font-family: sans-serif;padding:5px 0px;display:${companyName ? 'block' : 'none'};">${companyName ? companyName : '{Org name</span>}'}</p>
            <p style="font-size: 15px;color: #000000;font-family: sans-serif;padding:5px 0px;display:${personName ? 'block' : 'none'};">${personName ? personName : '{Org name</span>}'}</p>
            <p style="font-size: 15px;color: #000000;font-family: sans-serif;padding:5px 0px;display:${jobTitle ? 'block' : 'none'};">${jobTitle ? jobTitle : '{Org name</span>}'}</p>
            </div>

      </div > `;

  const ExportPDF = () => {
    setPreloaderCaption("Generating PDF. Please wait...");
    setIsPreloaderOn(true);
    var axios = require('axios');
    var qs = require('qs');

    var data = qs.stringify({
      'json_data': JSON.stringify(reportList)
    });
    var config = {
      method: 'post',
      url: 'http://settletrip.com/asg/asg_export_to_pdf.php',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.file_path));
        window.open(response.data.file_path);
        setIsPreloaderOn(false);
        setPreloaderCaption("Loading...");
      })
      .catch(function (error) {
        console.log(error);
      });
    // window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
    // setIsPreloaderOn(false);
    // setPreloaderCaption("Loading...");
  }


  const shareExportPDF = () => {

    //setCurrentShareOption(1);
    setPreloaderCaption("Generating PDF. Please wait...");
    setIsPreloaderOn(true);

    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'json_data': JSON.stringify(reportList)
    });

    var config = {
      method: 'post',
      url: 'http://settletrip.com/asg/asg_export_to_pdf.php',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.file_path));
        setIspath(response.data.file_path)
        setIsPreloaderOn(false);
        setPreloaderCaption("Loading...");
        setIsGoogleDriveExportOptionClicked(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onSuccessResponseFromGoogle = (response) => {
    setIsGoogleDriveExportOptionClicked(false);

    setPreloaderCaption("Fetching Data. Please wait...");
    setIsPreloaderOn(true);

    fetch(ispath, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then((result) => result.blob())
      .then((blob) => {
        let f = new FileReader();
        f.onload = (event) => {
          //console.log(event.currentTarget.result);
          let data = (event.currentTarget.result).split(",").pop();
          //uploadToDrive( response.accessToken , data );
          selectDriveFolder(response.accessToken);
          setIsToken(response.accessToken);
          setIsMetadata(data);
        }
        f.readAsDataURL(blob);
      });
  }

  const selectDriveFolder = (accessToken) => {
    const requestOptions =
    {
      method: 'GET',
      headers: {
        //'Content-Type': 'application/vnd.google-apps.folder',
        'Authorization': 'Bearer ' + accessToken,
      }
    }

    const query = "'root' in parents and mimeType='application/vnd.google-apps.folder'";

    const url = "https://www.googleapis.com/drive/v3/files?q=" + `${query} ` + "&key=AIzaSyAqlo6FvJtQl06yUyhboTdAsyAhu62WQNE";

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        let datasource = data.files;
        //const result = datasource.filter(datasource => datasource.mimeType == 'application/vnd.google-apps.folder');

        let rootItem = {
          kind: "drive#file",
          id: "root",
          name: "root",
          mimeType: "application/vnd.google-apps.folder",
          resourceKey: ""
        }

        datasource.splice(0, 0, rootItem);

        setDriveFolder(datasource);
        setIsPreloaderOn(false);
        setPreloaderCaption("Loading...");
        setDriveFolderModal(true);
      })
      .catch(error => {
        console.error('There was an error!', error.toString());
      });
  }

  const onCopyHandler = () => {
    setCopied(true);
  }

  const handleShareClose = () => {

  }

  const driveFolderHandleClick = (i, event) => {
    setDriveFolderModal(false);
    setPreloaderCaption("Uploading. Please wait...");
    setIsPreloaderOn(true);
    uploadToDrive(i);
  }

  const uploadToDrive = (id) => {
    const boundary = 'foo_bar_baz';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";

    let d = new Date();
    let getMMDDYYYYTIME = `${d.getMonth() + 1}_${d.getDate()}_${d.getFullYear()}_${d.getTime()} `;

    var fileName = 'asg_report_' + getMMDDYYYYTIME + '.pdf';
    //var fileData = isMetadata;
    var contentType = 'application/pdf'

    var metadata = {
      'name': fileName,
      'mimeType': contentType,
      'parents': [id]
    };

    var multipartRequestBody = delimiter + 'Content-Type: application/json; charset=UTF-8\r\n\r\n' + JSON.stringify(metadata) +
      delimiter + 'Content-Type: ' + contentType + '\r\n' + 'Content-Transfer-Encoding: base64\r\n' + '\r\n' + isMetadata + '\r\n' + close_delim;

    const requestOptions =
    {
      method: 'POST',
      headers: {
        //'Content-Type': currentShareOption == 1 ? 'application/pdf' : 'application/vnd.ms-excel',
        'Content-Type': 'multipart/related; boundary="' + boundary + '"',
        'Authorization': 'Bearer ' + isToken,
        'Content-Disposition': 'attachment',
      },
      body: multipartRequestBody,
    };

    fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', requestOptions)
      .then(response => response.json())
      .then(data => {

        setIsPreloaderOn(false);
        setPreloaderCaption("Loading...");

        console.log("RESULT after upload : " + JSON.stringify(data));

        if (data.hasOwnProperty('kind')) {
          setMsgDialog({ title: "Success!", description: "Successfully uploaded your content." });
          setMsgDialogOpen(true);
        } else {
          setMsgDialog({ title: "Oops!", description: data.error.message + " Failed to upload your content. " });
          setMsgDialogOpen(true);
        }
      })
      .catch(error => {
        console.error('There was an error!', error.toString());
        setIsPreloaderOn(false);
        setPreloaderCaption("Loading...");
        setMsgDialog({ title: "Oops!", description: "Failed to upload your content. There was an error ! " + error.toString() });
        setMsgDialogOpen(true);
      });
  }

  const onFailureResponseFromGoogle = (error) => {
    setIsGoogleDriveExportOptionClicked(false);
    console.log("ACCESS TOKEN ERROR : " + JSON.stringify(error));
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{title}</title>
      </Helmet>
      <Container sx={{}} maxWidth="100%" disableGutters role="main">
        <Box className='statement_generator_main_section'>

          <Header />

          <Box className='statement_generator_main_container'>

            <Grid container spacing={0} columns={12} sx={{ height: '100%', }}>

              <Grid item xs={6}>

                <Box className='statement_generator_left_container'>

                  <Box
                    className='accordion_content'>

                    <Accordion
                      expanded={expanded === 'panel1'} className='accordionView' onChange={accordionHandleChange('panel1')}
                    >
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Box
                          className='accordion_summary_content'>

                          <Box
                            className='accordion_summary_head_section'>

                            {/* <IconButton
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
                            </IconButton> */}

                            <Box className='exportButton'>
                              {expanded === 'panel1' ?
                                <RemoveIcon fontSize={'large'} sx={{ color: '#000000' }} />
                                :
                                <AddIcon fontSize={'large'} sx={{ color: '#000000' }} />
                              }
                            </Box>

                            <Box className='summary_main_title_section'>

                              <Box
                                className='summary_title_content'>

                                <Typography className='summary_title_text'>Basic information</Typography>
                                {/* <IconButton
                                  id="Basic-information"
                                  className='basicButton'
                                  color="primary"
                                  component="span"
                                  aria-label="Basic-informationaa"
                                  aria-describedby={popEl}
                                  size="small" 
                                  onClick={infoHandle}>
                                  <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                </IconButton> */}
                                <Box
                                  className='info_icon_section'
                                  onClick={infoHandle}
                                >
                                  <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                </Box>
                              </Box>
                              {companyName && websiteUrl ?
                                <></>
                                :
                                <Typography className='summary_required_text'><span>*</span> Required field</Typography>
                              }
                            </Box>

                          </Box>

                          {companyName || websiteUrl || date ?
                            <Box
                              className='summary_required_img'>

                              {companyName.length > 0 && websiteUrl.length > 0 ? <img src="../right.png" alt="" aria-hidden="true" /> : <img src="../wrong.png" alt="" aria-hidden="true" />}

                            </Box>
                            : null}
                        </Box>


                      </AccordionSummary>

                      <AccordionDetails>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography><span>*</span> Company or organization name</Typography>
                            <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            onChange={changeCompanyName}
                            className="inputControl"
                          //placeholder="Company or organization name"
                          />
                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography><span>*</span> Website or mobile application URL</Typography>
                            <IconButton color="primary" aria-label={'Website-URL'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            className="inputControl"
                            onChange={changeWebsiteUrl}
                          />
                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>What date is this statement being generated?</Typography>
                            <IconButton color="primary" aria-label={'Website-URL'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type="date"
                            inputProps={ariaLabel}
                            fullWidth={true}
                            className="inputControl"
                            onChange={dateHandleChange}
                          />
                        </Box>

                      </AccordionDetails>
                    </Accordion>


                    <Accordion
                      expanded={expanded === 'panel2'} className='accordionView' onChange={accordionHandleChange('panel2')}
                    >
                      <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Box className='accordion_summary_content'>

                          <Box className='accordion_summary_head_section'>


                            <Box className='exportButton'>
                              {expanded === 'panel2' ?
                                <RemoveIcon fontSize={'large'} sx={{ color: '#000000' }} />
                                :
                                <AddIcon fontSize={'large'} sx={{ color: '#000000' }} />
                              }
                            </Box>

                            <Box className='summary_main_title_section'>

                              <Box className='summary_title_content'>

                                <Typography className='summary_title_text'>Your Efforts</Typography>

                                <Box
                                  className='info_icon_section'
                                  onClick={infoHandle}
                                >
                                  <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                </Box>
                              </Box>
                              {yourEffortsList.length == 0 ?
                                <Typography className='summary_required_text'><span>*</span> Required field</Typography>
                                : null}
                            </Box>

                          </Box>

                          {yourEffortsList.length > 0 ?
                            <Box className='summary_required_img'>
                              {yourEffortsList[0].value != '' ?
                                <img src="../right.png" alt="" aria-hidden="true" />
                                : <img src="../wrong.png" alt="" aria-hidden="true" />
                              }
                            </Box>
                            : null}
                        </Box>


                      </AccordionSummary>

                      <AccordionDetails>
                        <Typography sx={{ fontSize: 15, color: '#000000', pr: 0.5, pb: 2, }}>Select and/or add any existing efforts your company or organization takes to ensure web accessibility.</Typography>

                        <FormGroup>
                          {organizationWebAccessibilityList.map((item, index) => (
                            index < 7 ?
                              <FormControlLabel key={index} value={item.value} className="checkbox_lable_text" control={<Checkbox />} label={item.value} onChange={(e) => handleCheck(e, index)} />
                              :
                              null
                          ))}
                        </FormGroup>

                        <Box className="form_group_view">
                          {
                            organizationWebAccessibilityList.map((item, index) => {
                              return <>
                                {index > 6 ?
                                  <Box key={index}>
                                    <Box className="form_label_group">
                                      <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box className='input_control_View'>
                                      <Input
                                        type='text'
                                        inputProps={ariaLabel}
                                        fullWidth={true}
                                        onChange={(e) => addEfforts(e, index)}
                                        className="inputControl"
                                        value={item.value}
                                      />
                                      <Button className='remove_btn' onClick={(e) => removeAdditionalEffort(e, index)}>
                                        <CloseIcon fontSize={"small"} sx={{ color: '#ffffff' }} />
                                      </Button>
                                    </Box>
                                  </Box>
                                  :
                                  null
                                }
                              </>
                            })
                          }

                          <Button className='addEffortsBtn' onClick={addAdditionalEffort} startIcon={<AddIcon fontSize={"large"} sx={{ color: '#ffffff' }} />}>
                            Add an additional effort
                          </Button>

                        </Box>

                      </AccordionDetails>
                    </Accordion>


                    <Accordion
                      expanded={expanded === 'panel3'} className='accordionView' onChange={accordionHandleChange('panel3')}
                    >
                      <AccordionSummary
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Box className='accordion_summary_content'>

                          <Box className='accordion_summary_head_section'>

                            <Box className='exportButton'>
                              {expanded === 'panel3' ?
                                <RemoveIcon fontSize={'large'} sx={{ color: '#000000' }} />
                                :
                                <AddIcon fontSize={'large'} sx={{ color: '#000000' }} />
                              }
                            </Box>

                            <Box className='summary_main_title_section'>

                              <Box className='summary_title_content'>

                                <Typography className='summary_title_text'>Conformance Status</Typography>
                                <Box
                                  className='info_icon_section'
                                  onClick={infoHandle}
                                >
                                  <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                </Box>
                              </Box>
                              {accessibilityStandard == '' ?
                                <Typography className='summary_required_text'><span>*</span> Required field</Typography>
                                : null}
                            </Box>

                          </Box>

                          {accessibilityStandard || accessibilityLevelSite || currentContent || knownAccessibilityIssuesList[0].videotitle != '' || knownAccessibilityIssuesList.length > 1 ?
                            <Box className='summary_required_img'>
                              {accessibilityStandard != '' ?
                                <img src="../right.png" alt="" aria-hidden="true" />
                                : <img src="../wrong.png" alt="" aria-hidden="true" />
                              }
                            </Box>
                            : null}
                        </Box>


                      </AccordionSummary>

                      <AccordionDetails>

                        <Box>
                          <Box className="form_label_group">
                            <Typography><span>*</span> What accessibility standard does your site currently adhere to ?</Typography>
                            <IconButton color="primary" aria-label={'accessibility-standard'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <RadioGroup
                            row
                            aria-label="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            {
                              accessibilityStandardArray.map((item, index) => {
                                return <FormControlLabel key={index} value={item} className="checkbox_lable_text" control={<Radio />} label={item} onChange={accessibilityStandarHandler} />
                              })
                            }
                          </RadioGroup>

                        </Box>

                        <Box>
                          <Box className="form_label_group">
                            <Typography>What accessibility level does your site currently adhere to ?</Typography>
                            <IconButton color="primary" aria-label={'accessibility-level'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <RadioGroup
                            row
                            aria-label="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            {
                              accessibilityLevelArray.map((item, index) => {
                                return <FormControlLabel key={index} value={item} className="checkbox_lable_text" control={<Radio />} label={item} onChange={accessibilityLevelHandler} />
                              })
                            }
                          </RadioGroup>

                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>Current content conformance status</Typography>
                            <IconButton color="primary" aria-label={'accessibility-level'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>
                        </Box>

                        <Box className="form_group_view">
                          <RadioGroup
                            aria-label="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            {
                              currentContentConformanceStatus.map((item, index) => {
                                return <FormControlLabel key={index} value={item} className="checkbox_lable_text" control={<Radio />} label={item} onChange={conformanceStatusHandler} sx={{ mb: 2 }} />
                              })
                            }
                          </RadioGroup>
                        </Box>


                        <Box>
                          {
                            knownAccessibilityIssuesList.map((item, index) => {
                              return <>
                                <Box key={index} className="form_group_view">

                                  <Box className="form_label_group">
                                    <Typography>{item.title}</Typography>
                                    <IconButton color="primary" aria-label={'accessibility-level'} component="span" size="small" onClick={infoHandle}>
                                      <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                    </IconButton>
                                    {index != 0 ?
                                      <Button className='remove_btn' onClick={(e) => removeAccessibilityHandaler(e, index)}>
                                        <CloseIcon fontSize={"small"} sx={{ color: '#ffffff' }} />
                                      </Button>
                                      : null}
                                  </Box>
                                  <Input
                                    type='text'
                                    inputProps={ariaLabel}
                                    fullWidth={true}
                                    onChange={(e) => issuesTitleHandaler(e, index)}
                                    className="inputControl"
                                    placeholder="Video title"
                                    value={item.videotitle}
                                  />
                                  <br /><br />
                                  <Input
                                    type='text'
                                    inputProps={ariaLabel}
                                    fullWidth={true}
                                    onChange={(e) => issuesDescriptionHandaler(e, index)}
                                    className="inputControl"
                                    placeholder="Description of the issue"
                                    value={item.discription}
                                  />

                                </Box>
                              </>
                            })
                          }

                          <Button className='addEffortsBtn' onClick={addAccessibilityHandaler} startIcon={<AddIcon fontSize={"large"} sx={{ color: '#ffffff' }} />}>
                            Add another issue
                          </Button>

                        </Box>


                      </AccordionDetails>

                    </Accordion>


                    <Accordion
                      expanded={expanded === 'panel4'} className='accordionView' onChange={accordionHandleChange('panel4')}
                    >
                      <AccordionSummary
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                      >
                        <Box className='accordion_summary_content'>

                          <Box className='accordion_summary_head_section'>

                            <Box className='exportButton'>
                              {expanded === 'panel4' ?
                                <RemoveIcon fontSize={'large'} sx={{ color: '#000000' }} />
                                :
                                <AddIcon fontSize={'large'} sx={{ color: '#000000' }} />
                              }
                            </Box>

                            <Box className='summary_main_title_section'>

                              <Box className='summary_title_content'>

                                <Typography className='summary_title_text'>Technical Specifications</Typography>
                                <Box
                                  className='info_icon_section'
                                  onClick={infoHandle}
                                >
                                  <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                </Box>
                              </Box>

                              {browsersList[0].value == "" && assistiveTechnologiesList[0].value == "" && technologiesList.length == 0 ?
                                <Typography className='summary_required_text'><span>*</span> Required field</Typography>
                                : null}

                            </Box>

                          </Box>

                          {browsersList.length > 1 || assistiveTechnologiesList.length > 1 || technologiesList.length > 0 || browsersList[0].value != "" || assistiveTechnologiesList[0].value != "" ?
                            <Box className='summary_required_img'>
                              {technologiesList.length > 0 || browsersList[0].value != "" || assistiveTechnologiesList[0].value != "" ?
                                <img src="../right.png" alt="" aria-hidden="true" />
                                : <img src="../wrong.png" alt="" aria-hidden="true" />
                              }
                            </Box>
                            : null}
                        </Box>

                      </AccordionSummary>

                      <AccordionDetails>
                        <Box>
                          <Box className="form_group_view">
                            <Box className="form_label_group">
                              <Typography>List the browsers that have been tested for compatibility.</Typography>
                              <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                                <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                              </IconButton>
                            </Box>


                          </Box>

                          <Box className="form_group_view">
                            {
                              browsersList.map((item, index) => {
                                return <>
                                  <Box key={index}>
                                    <Box className="form_label_group">
                                      <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box className='input_control_View'>
                                      <Input
                                        type='text'
                                        inputProps={ariaLabel}
                                        fullWidth={true}
                                        onChange={(e) => onChangeBrowserHandler(e, index)}
                                        className="inputControl"
                                        value={item.value}
                                      />
                                      {index != 0 ?
                                        <Button className='remove_btn' onClick={(e) => removeBrowserHandler(e, index)}>
                                          <CloseIcon fontSize={"small"} sx={{ color: '#ffffff' }} />
                                        </Button>
                                        : null}
                                    </Box>
                                  </Box>
                                </>
                              })
                            }

                            <Button className='addEffortsBtn' onClick={addBrowserHandaler} startIcon={<AddIcon fontSize={"large"} sx={{ color: '#ffffff' }} />}>
                              Add another browser
                            </Button>

                          </Box>
                        </Box>

                        <Box>
                          <Box className="form_group_view">
                            <Box className="form_label_group">
                              <Typography>List the assistive technologies that have been tested for compatibility.</Typography>
                              <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                                <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                              </IconButton>
                            </Box>

                          </Box>

                          <Box className="form_group_view">

                            {
                              assistiveTechnologiesList.map((item, index) => {
                                return <>
                                  <Box key={index}>
                                    <Box className="form_label_group">
                                      <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box className='input_control_View'>
                                      <Input
                                        type='text'
                                        inputProps={ariaLabel}
                                        fullWidth={true}
                                        onChange={(e) => onChangeAssistiveHandler(e, index)}
                                        className="inputControl"
                                        value={item.value}
                                      />
                                      {index != 0 ?
                                        <Button className='remove_btn' onClick={(e) => removeAssistiveHandler(e, index)}>
                                          <CloseIcon fontSize={"small"} sx={{ color: '#ffffff' }} />
                                        </Button>
                                        : null}
                                    </Box>
                                  </Box>
                                </>
                              })
                            }

                            <Button className='addEffortsBtn' onClick={addAssistiveHandler} startIcon={<AddIcon fontSize={"large"} sx={{ color: '#ffffff' }} />}>
                              another assistive technology
                            </Button>

                          </Box>
                        </Box>

                        <Box>


                          <Box className="form_group_view">
                            <Typography sx={{ fontSize: 15, color: '#000000', pr: 0.5, pb: 2, }}><span style={{ color: 'red' }}>*</span> Technologies the site relies upon</Typography>

                            <FormGroup>
                              {technologiesNameList.map((item, index) => (
                                index < 5 ?
                                  <FormControlLabel key={index} value={item.value} className="checkbox_lable_text" control={<Checkbox />} label={item.value} onChange={(e) => technologiesCheck(e, index)} />
                                  : null
                              ))}
                            </FormGroup>

                            <Box className="form_group_view">

                              {
                                technologiesNameList.map((item, index) => {
                                  return <>
                                    {index > 4 ?
                                      <Box key={index}>
                                        <Box className="form_label_group">
                                          <Typography>{item.title}</Typography>
                                        </Box>
                                        <Box className='input_control_View'>
                                          <Input
                                            type='text'
                                            inputProps={ariaLabel}
                                            fullWidth={true}
                                            onChange={(e) => onChangeAddTechnologies(e, index)}
                                            className="inputControl"
                                            value={item.value}
                                          />
                                          <Button className='remove_btn' onClick={(e) => removeTechnologiestHandler(e, index)}>
                                            <CloseIcon fontSize={"small"} sx={{ color: '#ffffff' }} />
                                          </Button>
                                        </Box>
                                      </Box>
                                      : null}
                                  </>
                                })
                              }

                              <Button className='addEffortsBtn' onClick={addTechnologiesHandler} startIcon={<AddIcon fontSize={"large"} sx={{ color: '#ffffff' }} />}>
                                Add another technology
                              </Button>

                            </Box>

                          </Box>

                        </Box>

                      </AccordionDetails>

                    </Accordion>


                    <Accordion
                      expanded={expanded === 'panel5'} className='accordionView' onChange={accordionHandleChange('panel5')}
                    >
                      <AccordionSummary
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                      >
                        <Box className='accordion_summary_content'>

                          <Box className='accordion_summary_head_section'>

                            <Box className='exportButton'>
                              {expanded === 'panel5' ?
                                <RemoveIcon fontSize={'large'} sx={{ color: '#000000' }} />
                                :
                                <AddIcon fontSize={'large'} sx={{ color: '#000000' }} />
                              }
                            </Box>

                            <Box className='summary_main_title_section'>

                              <Box className='summary_title_content'>

                                <Typography className='summary_title_text'>Assessment methods</Typography>
                                <Box
                                  className='info_icon_section'
                                  onClick={infoHandle}
                                >
                                  <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                </Box>
                              </Box>
                              {assessmentList.length == 0 && assessmentRecentReport.length == 0 ?
                                <Typography className='summary_required_text'><span>*</span> Required field</Typography>
                                : null}
                            </Box>

                          </Box>

                          {assessmentList.length > 0 || assessmentRecentReport.length > 0 ?
                            <Box className='summary_required_img'>
                              {assessmentList.length > 0 || assessmentRecentReport.length > 0 ?
                                <img src="../right.png" alt="" aria-hidden="true" />
                                : <img src="../wrong.png" alt="" aria-hidden="true" />
                              }
                            </Box>
                            : null}
                        </Box>


                      </AccordionSummary>

                      <AccordionDetails>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>Select any assessment methods used to evaluate this site:</Typography>
                            <IconButton color="primary" aria-label={'Website-URL'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <FormGroup>
                            {assessmentMethodSiteList.map((item, index) => (
                              index < 2 ?
                                <FormControlLabel key={index} value={item.value} sx={{ mt: 1.5 }} className="checkbox_lable_text" control={<Checkbox />} label={item.value} onChange={(e) => assessmentCheck(e, index)} />
                                : null
                            ))}
                          </FormGroup>
                        </Box>

                        <Box className="form_group_view">
                          {
                            assessmentMethodSiteList.map((item, index) => {

                              return <>
                                {index > 1 ?
                                  <Box key={index}>
                                    <Box className="form_label_group">
                                      <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box className='input_control_View'>
                                      <Input
                                        type='text'
                                        inputProps={ariaLabel}
                                        fullWidth={true}
                                        onChange={(e) => onChangeAddAssessment(e, index)}
                                        className="inputControl"
                                        value={item.value}
                                      />
                                      <Button className='remove_btn' onClick={(e) => removeAssessmentHandler(e, index)}>
                                        <CloseIcon fontSize={"small"} sx={{ color: '#ffffff' }} />
                                      </Button>
                                    </Box>
                                  </Box>
                                  : null}
                              </>

                            })
                          }

                          <Button className='addEffortsBtn' onClick={addAssessmentHandler} startIcon={<AddIcon fontSize={"large"} sx={{ color: '#ffffff' }} />}>
                            Add another method
                          </Button>

                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>If applicable, include a link to any recent accessibility evaluation reports.</Typography>
                            <IconButton color="primary" aria-label={'Website-URL'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            className="inputControl"
                            onChange={changeAccessibilityReports}
                          />

                        </Box>

                      </AccordionDetails>

                    </Accordion>


                    <Accordion
                      expanded={expanded === 'panel6'} className='accordionView' onChange={accordionHandleChange('panel6')}
                    >
                      <AccordionSummary
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                      >
                        <Box className='accordion_summary_content'>

                          <Box className='accordion_summary_head_section'>

                            <Box className='exportButton'>
                              {expanded === 'panel6' ?
                                <RemoveIcon fontSize={'large'} sx={{ color: '#000000' }} />
                                :
                                <AddIcon fontSize={'large'} sx={{ color: '#000000' }} />
                              }
                            </Box>

                            <Box className='summary_main_title_section'>

                              <Box className='summary_title_content'>

                                <Typography className='summary_title_text'>Feedback process</Typography>
                                <Box
                                  className='info_icon_section'
                                  onClick={infoHandle}
                                >
                                  <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                                </Box>
                              </Box>

                              {phoneNo || email || postal || responseTime || complaintsName || personName || jobTitle ?
                                <></>
                                : <Typography className='summary_required_text'><span>*</span> Required field</Typography>}
                            </Box>

                          </Box>

                          {phoneNo || email || postal || responseTime || complaintsName || personName || jobTitle ?
                            <Box className='summary_required_img'>
                              {phoneNo || email || postal || responseTime || complaintsName || personName || jobTitle ?
                                <img src="../right.png" alt="" aria-hidden="true" />
                                : <img src="../wrong.png" alt="" aria-hidden="true" />
                              }
                            </Box>
                            : null}
                        </Box>


                      </AccordionSummary>

                      <AccordionDetails>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>Company phone number</Typography>
                            <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            onChange={changePhoneNo}
                            className="inputControl"
                          //placeholder="Company or organization name"
                          />
                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>Company e-mail address</Typography>
                            <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            onChange={changeEmail}
                            className="inputControl"
                          //placeholder="Company or organization name"
                          />
                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>Company postal address</Typography>
                            <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            onChange={changePostalAddress}
                            className="inputControl"
                          //placeholder="Company or organization name"
                          />
                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>Typical response time</Typography>
                            <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            onChange={changeResponseTime}
                            className="inputControl"
                          //placeholder="Company or organization name"
                          />
                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>Formal complaints</Typography>
                            <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            onChange={changeComplaints}
                            className="inputControl"
                          //placeholder="Company or organization name"
                          />
                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>Name of person or department responsible for approving this statement</Typography>
                            <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            onChange={changePersonName}
                            className="inputControl"
                          //placeholder="Company or organization name"
                          />
                        </Box>

                        <Box className="form_group_view">
                          <Box className="form_label_group">
                            <Typography>Job title</Typography>
                            <IconButton color="primary" aria-label={'organization-name'} component="span" size="small" onClick={infoHandle}>
                              <HelpIcon style={{ color: "#ababab", fontSize: 20, }} />
                            </IconButton>
                          </Box>

                          <Input
                            type='text'
                            inputProps={ariaLabel}
                            fullWidth={true}
                            onChange={changeJobTitle}
                            className="inputControl"
                          //placeholder="Company or organization name"
                          />
                        </Box>

                      </AccordionDetails>

                    </Accordion>

                  </Box>

                </Box>

              </Grid>



              <Grid item xs={6}>

                <Box className='statement_generator_right_container'>

                  {/* {isOver ?
                    <Box
                      className='hidden_modal' />
                    : null} */}


                  <Box className='about_content_overlay'>
                    <IconButton
                      id="about-us"
                      className='exportButton about_us_button'
                      aria-label="about us button"
                      aria-pressed={isAbout}
                      component="span"
                      size="small"
                      onClick={aboutusHandlerClick}
                    >
                      <InfoIcon style={{ color: "#000000", fontSize: 20, }} />
                      ABOUT US
                    </IconButton>
                  </Box>

                  <Box className="right_expand_content">

                    {!expanded ?
                      <Box className="empty_content">
                        <img src="../empty.png" alt="" aria-hidden="true" />
                      </Box>
                      : null}

                    {expanded === 'panel1' ?
                      <Box>
                        <Box className='basic_information_left_panel'>
                          <Typography>Our Aim</Typography>
                          <ChangeHighlight><Typography>{companyName ? <span ref={createRef()}>{companyName}</span> : '_________'} is committed to ensuring digital accessibility for people with disabilities. We continue to make changes to improve the user experience for everyone and apply the relevant accessibility standards.</Typography></ChangeHighlight>
                          <ChangeHighlight><Typography>The Web Content {websiteUrl ? <span ref={createRef()}>{websiteUrl}</span> : '_________'} Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Date {date ? <span ref={createRef()}>{date}</span> : '_________'} .</Typography></ChangeHighlight>
                        </Box>

                      </Box>
                      : null}

                    {expanded === 'panel2' ?
                      <>

                        {yourEffortsList.length > 0 ?

                          <Box className='your_effect_left_panel'>
                            <ChangeHighlight><Typography className='left_panel_title_heading' ref={createRef()}>{organizational_items_heading}</Typography></ChangeHighlight>
                            {yourEffortsList.map((item, index) => {
                              return <ChangeHighlight key={index}><Typography><span ref={createRef()}>• {item.value}</span></Typography></ChangeHighlight>
                            })}
                          </Box>

                          :
                          <Box className="empty_content">
                            <img src="../empty.png" alt="" aria-hidden="true" />
                          </Box>
                        }
                      </>
                      : null}

                    {expanded === 'panel3' ?
                      <Box>
                        <Box className='conformance_statust_left_panel'>
                          <ChangeHighlight><Typography>Wherever possible, Lorem Ipsum Dolor will aim to adhere to level {conformance.accessibilityStandard ? <span ref={createRef()}>{conformance.accessibilityStandard}</span> : '______'} of the WCAG {conformance.accessibilityLevelSite ? <span ref={createRef()}>{conformance.accessibilityLevelSite}</span> : '______'} guidelines, which states that sites should be:</Typography></ChangeHighlight>
                          <ChangeHighlight><Typography><span ref={createRef()}>{conformanceStatus}</span></Typography></ChangeHighlight>
                          {knownAccessibilityIssuesList.length > 0 ?
                            <>
                              {knownAccessibilityIssuesList.map((item, index) => {
                                return <>
                                  <Box key={index} sx={{ pb: 1 }}>
                                    <Typography sx={{ fontSize: 14, fontColor: "#000000", pb: 2, }}>{item.title}:</Typography>
                                    <ChangeHighlight><Typography ref={createRef()} sx={{ fontSize: 14, fontColor: "#000000", }}>{item.videotitle}</Typography></ChangeHighlight>
                                    <ChangeHighlight><Typography ref={createRef()} sx={{ fontSize: 14, fontColor: "#000000", }}>{item.discription}</Typography></ChangeHighlight>
                                  </Box> </>
                              })}
                            </>
                            : null}

                        </Box>
                      </Box>
                      : null}

                    {expanded === 'panel4' ?
                      <Box className='technical_specifications_left_panel'>

                        <ChangeHighlight><Typography className='left_panel_title_heading'>List the browsers name</Typography></ChangeHighlight>
                        {
                          browsersList.length > 0 ?
                            <>
                              {browsersList.map((item, index) => {
                                return <>
                                  <ChangeHighlight key={index}><Typography>{item.title}: <span ref={createRef()}>{item.value}</span> </Typography></ChangeHighlight>
                                </>
                              })}
                            </>
                            : null
                        }
                        <ChangeHighlight><Typography className='left_panel_title_heading'>List the assistive name</Typography></ChangeHighlight>
                        {
                          assistiveTechnologiesList.length > 0 ?
                            assistiveTechnologiesList.map((item, index) => {
                              return <>
                                <ChangeHighlight key={index}><Typography>{item.title}: <span ref={createRef()}>{item.value}</span> </Typography></ChangeHighlight>
                              </>
                            })
                            : null
                        }

                        {technologiesList.length > 0 ?
                          <>
                            <ChangeHighlight><Typography className='left_panel_title_heading' ref={createRef()}>Technologies the site relies upon</Typography></ChangeHighlight>
                            {technologiesList.map((item, index) => {
                              return <ChangeHighlight key={index}><Typography><span ref={createRef()}>• {item.value}</span></Typography></ChangeHighlight>
                            })}

                          </>
                          : null}

                      </Box>
                      : null}

                    {expanded === 'panel5' ?
                      <Box className='assessment_method_left_panel'>
                        {assessmentList.length > 0 ?
                          <>
                            <ChangeHighlight><Typography className='left_panel_title_heading' ref={createRef()}>Select any assessment methods used to evaluate this site</Typography></ChangeHighlight>
                            {assessmentList.map((item, index) => {
                              return <ChangeHighlight key={index}><Typography>• <span ref={createRef()}>{item.value}</span></Typography></ChangeHighlight>
                            })}

                          </>
                          : null}

                        <Typography className='left_panel_title_heading' ref={createRef()}>Accessibility evaluation reports.</Typography>
                        <ChangeHighlight><Typography ref={createRef()}>{assessmentRecentReport}</Typography></ChangeHighlight>


                      </Box>
                      : null}

                    {expanded === 'panel6' ?
                      <Box className='feedback_left_panel'>

                        <ChangeHighlight><Typography>phone number: <span ref={createRef()}> {phoneNo ? phoneNo : <>_______</>}</span></Typography></ChangeHighlight>
                        <ChangeHighlight><Typography>Company e-mail: <span ref={createRef()}> {email ? email : <>_______</>}</span></Typography></ChangeHighlight>
                        <ChangeHighlight><Typography>Company postal address: <span ref={createRef()}> {postal ? postal : <>_______</>}</span></Typography></ChangeHighlight>
                        <ChangeHighlight><Typography>response time: <span ref={createRef()}> {responseTime ? responseTime : <>_______</>}</span></Typography></ChangeHighlight>
                        <ChangeHighlight><Typography>complaints Name: <span ref={createRef()}> {complaintsName ? complaintsName : <>_______</>}</span></Typography></ChangeHighlight>
                        <ChangeHighlight><Typography>Name of person or department responsible for approving this statement:<span ref={createRef()}> {personName ? personName : <>_______</>}</span></Typography></ChangeHighlight>
                        <ChangeHighlight><Typography>Job title: <span ref={createRef()}> {jobTitle ? jobTitle : <>_______</>}</span></Typography></ChangeHighlight>

                      </Box>
                      : null}

                  </Box>


                  <Box className="report_footer_section">
                    <Typography>To read full statement click here</Typography>
                    {companyName || websiteUrl || date || yourEffortsList.length > 0 && yourEffortsList[0].value != '' || accessibilityStandard || accessibilityLevelSite || currentContent || knownAccessibilityIssuesList[0].videotitle != '' || knownAccessibilityIssuesList[0].discription != '' || browsersList[0].value != '' || assistiveTechnologiesList[0].value != '' || technologiesList.length > 0 && technologiesList[0].value != '' || assessmentList.length > 0 && assessmentList[0].value != '' || assessmentRecentReport || phoneNo || email || postal || responseTime || personName || jobTitle ?
                      <Button
                        className='start_button'
                        onClick={handleOpenModal}
                      >
                        FULL PREVIEW
                      </Button>
                      :
                      <Button
                        disabled
                        className='start_button button_disable'
                        onClick={handleOpenModal}
                      >
                        FULL PREVIEW
                      </Button>
                    }
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
          role="dialog"
          aria-labelledby="statement"
          aria-describedby="unstyled-modal-description"
          open={modal}
          onClose={handleCloseModal}
        // BackdropComponent={Backdropl}
        >
          <Box className='modal_main_view'>

            <Box
              className='preview_modal_section'
            //role="presentation"
            >
              {/* <Box
                className='preview_modal_header'>
                <IconButton
                  id="Clipboard2"
                  className='exportButton'
                  aria-label="Clipboard button"
                  component="span" size="small"
                //onClick={ExportEXCEL}
                >
                  <ContentCopyIcon style={{ color: "#000000", fontSize: 20, }} />
                  COPY TO CLIPBOARD
                </IconButton>

              </Box> */}
              <Box className="top_button_menu_content">

                <Box
                  className="top_button_menu">



                  <CopyToClipboard text={copiedData}
                    onCopy={onCopyHandler}>
                    <IconButton
                      id="Clipboard"
                      className='clipboard_button exportButton'
                      aria-label="Copy to clipboard button"
                      component="span" size="small"
                    >
                      <ContentCopyIcon style={{ color: "#000000", fontSize: 18, }} />
                      COPY TO CLIPBOARD
                    </IconButton>
                  </CopyToClipboard>

                  {/* <Box
                    className='clipboard_right_bar' /> */}

                  <IconButton
                    id="PDF-Export"
                    className='exportButton'
                    aria-label="PDF Export button"
                    component="span" size="small"
                    onClick={ExportPDF}

                  >
                    <PictureAsPdfIcon style={{ color: "#000000", fontSize: 18, }} />
                    PDF EXPORT
                  </IconButton>


                  <IconButton
                    id="share-drive"
                    className='exportButton'
                    aria-label="share-drive button"
                    //aria-pressed={shereOpen}
                    component="span"
                    size="small"
                    onClick={shareExportPDF}
                  >
                    <AddToDriveIcon style={{ color: "#000000", fontSize: 18, }} />
                    SHARE IN DRIVE
                  </IconButton>


                  <IconButton
                    id="close-button"
                    className='exportButton'
                    aria-label="close button"
                    onClick={handleCloseModal}
                    aria-controls={modal ? 'close-button' : undefined}
                    aria-haspopup="true"
                    aria-expanded={modal ? 'true' : undefined}
                  >
                    <CloseIcon style={{ color: "#000000", fontSize: 35, }} />
                  </IconButton>

                </Box>

              </Box>


            </Box>

            <Box className='preview_modal_header_title'>
              <Typography id="statement">STATEMENT IN FULL PREVIEW MODE</Typography>
            </Box>

            <Box className='preview_modal_content_section' id="unstyled-modal-description">
              <Typography className='accessibility_statement_title'>Accessibility statement - {companyName ? companyName : <span>Org name</span>}</Typography>

              {websiteUrl ?
                <Typography className='accessibility_statement_url'>URL: <Link>{websiteUrl}</Link></Typography>
                : null}
              <Typography className='accessibility_statement_subtitle'>{companyName ? companyName : <span>Org name</span>} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</Typography>

              {yourEffortsList.length > 0 ?
                <>
                  <Typography className='efforts_title'>Efforts to support accessibility</Typography>
                  <Typography className='efforts_subtitle'>{companyName ? companyName : <span>Org name</span>} takes the following measures to ensure accessibility:</Typography>
                </>
                : null}

              {yourEffortsList.map((item, index) => (
                <Typography key={index} className='efforts_list_item'>• {item.value}</Typography>
              ))}
              {accessibilityLevelSite || accessibilityStandard ?
                <>
                  <Typography className='conformance_status_title'>Conformance status</Typography>
                  <Typography className='conformance_status_subtitle'>Current accessibility standard of the site:</Typography>
                  <Typography className='conformance_status_WCAG'>WCAG {accessibilityLevelSite ? accessibilityLevelSite : 'undefined'} level {accessibilityStandard ? accessibilityStandard : 'undefined'}</Typography>
                </>
                : null}

              {currentContent.length > 0 ?
                <>
                  <Typography className='current_conformance_status_title'>Current content conformance status:</Typography>
                  <Typography className='current_conformance_status_subtitle'>{currentContent}</Typography>
                </>
                : null}

              {knownAccessibilityIssuesList[0].videotitle != "" || knownAccessibilityIssuesList[0].discription != "" ?
                <>
                  <Typography className='known_accessibility_issues_title'>Known accessibility issues</Typography>
                  <Typography className='known_accessibility_issues_subtitle'>Despite our best efforts users may experience some issues. This is a description of known accessibility issues. Please contact us if you observe an issue that is not listed.</Typography>
                </> : null}

              {knownAccessibilityIssuesList.map((item, index) => (
                <>
                  {item.videotitle ?
                    <Typography className='known_accessibility_Vtitle'>{item.videotitle}:</Typography>
                    : null}
                  {item.discription ?
                    <Typography className='known_accessibility_discription'>{item.discription}</Typography>
                    : null}
                </>

              ))}

              {browsersList[0].value != '' || assistiveTechnologiesList[0].value != '' ?
                <Typography className='compatibility_browser_title'>Compatibility with browsers and assistive technology</Typography>
                : null}

              {browsersList[0].value != '' ?
                <>
                  <Typography className='compatibility_browser_subtitle'>This site is designed to be compatible with the following browsers:</Typography>
                  {browsersList.map((item, index) => (
                    <Typography key={index} className='efforts_list_item'>• {item.value}</Typography>
                  ))}
                </>
                : null}

              {assistiveTechnologiesList[0].value != '' ?
                <>
                  <Typography className='compatibility_browser_subtitle'>This site is designed to be compatible with the following assistive technologies:</Typography>
                  {assistiveTechnologiesList.map((item, index) => (
                    <Typography key={index} className='efforts_list_item'>• {item.value}</Typography>
                  ))}
                </>
                : null}

              {technologiesList.length > 0 ?
                <>
                  <Typography className='compatibility_browser_title'>Technologies</Typography>
                  <Typography className='compatibility_browser_subtitle'>Accessibility of this site relies on the following technologies to work:</Typography>
                  {technologiesList.map((item, index) => (
                    <Typography key={index} className='efforts_list_item'>• {item.value}</Typography>
                  ))}
                </>
                : null}

              {assessmentList.length > 0 ?
                <>
                  <Typography className='compatibility_browser_title'>Assessment methods</Typography>
                  <Typography className='compatibility_browser_subtitle'>{companyName ? companyName : <span>Org name</span>} assessed the accessibility of this site using the following method(s):</Typography>
                  {assessmentList.map((item, index) => (
                    <Typography key={index} className='efforts_list_item'>• {item.value}</Typography>
                  ))}
                  {assessmentRecentReport.length > 0 ?
                    <Typography className='compatibility_browser_subtitle'>{assessmentRecentReport}</Typography> : null}
                </>
                : null}

              {phoneNo.length > 0 || email.length > 0 || postal.length > 0 || responseTime.length > 0 ?
                <Typography className='compatibility_browser_title'>Feedback process</Typography>
                : null}

              {phoneNo.length > 0 ?
                <Typography className='efforts_list_item'>• Phone: {phoneNo}</Typography>
                : null}

              {email.length > 0 ?
                <Typography className='efforts_list_item'>• E-mail: {email}</Typography>
                : null}

              {postal.length > 0 ?
                <Typography className='efforts_list_item'>• Postal Address: {postal}</Typography>
                : null}

              {responseTime.length > 0 ?
                <Typography className='compatibility_browser_subtitle'>We aim to respond to feedback within {responseTime}.</Typography>
                : null}

              {complaintsName.length > 0 ?
                <>
                  <Typography className='compatibility_browser_title'>Formal complaints</Typography>
                  <Typography className='compatibility_browser_subtitle'>{complaintsName}</Typography>
                </>
                : null}

              {personName.length > 0 || jobTitle.length > 0 ?
                <>
                  <Typography className='compatibility_browser_title'>Formal approval of this accessibility statement</Typography>
                  <Typography className='compatibility_browser_subtitle'>This accessibility statement is approved by:</Typography>

                  {companyName.length > 0 ?
                    <Typography className='efforts_list_item'>{companyName ? companyName : <span>Org name</span>}</Typography>
                    : null}

                  {personName.length > 0 ?
                    <Typography className='efforts_list_item'>{personName}</Typography>
                    : null}

                  {jobTitle.length > 0 ?
                    <Typography className='efforts_list_item'>{jobTitle}</Typography>
                    : null}
                </>
                : null}




            </Box>

            <Box
              className='preview_modal_footer_view'>
              <CopyToClipboard text={copiedData}
                onCopy={onCopyHandler}>
                <Button
                  className='start_button'
                //onClick={onClickAnalyzeHandler} 
                >
                  COPY TO CLIPBOARD
                </Button>
              </CopyToClipboard>
            </Box>

          </Box>

        </Modal>

        <Modal
          open={isPreloaderOn}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">

          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>

            <Preloader caption={preloaderCaption} />

          </Box>

        </Modal>

        <Modal
          open={isGoogleDriveExportOptionClicked}
          onClose={handleShareClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">

          <Box className='googleModelStyle'>
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <GoogleLogin
                clientId="978719022448-hqtr18jvf6685ilmip2cm18id45o8i02.apps.googleusercontent.com"
                //clientId="471472160602-nfj2c45sdse07b58dtl5gauknohtmvov.apps.googleusercontent.com"
                buttonText="Signin"
                onSuccess={onSuccessResponseFromGoogle}
                onFailure={onFailureResponseFromGoogle}
                cookiePolicy={'none'}
                // render={renderProps => (
                //   <button style={{padding: 10,}} onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Signin</button>
                // )}
                scope="https://www.googleapis.com/auth/drive"
              />
            </Box>
          </Box>
        </Modal>

        <Modal
          open={driveFolderModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Box
              sx={{
                width: 300,
                maxHeight: 400,
                minHeight: 200,
                position: 'relative',
                background: '#ffffff',
                borderRadius: 1,
                p: 2,
                overflowX: 'hidden',
              }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'left',
                  //p: 0.5,
                  //background: '#cccccc',
                  mb: 2,
                  //borderRadius: 1,
                  cursor: 'pointer',
                }}>
                <Typography sx={{ color: "#666666", fontSize: 16, fontWeight: 600, pl: 1, pt: 0.4 }}>Please choose Folder :-</Typography>
              </Box>
              {driveFolder.map((g, i) => (
                <Box
                  key={"cell_" + i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 0.5,
                    //backgroundColor: '#f1fbff',
                    backgroundColor: i == 0 ? "#f2ecd8" : "#f5f1e6",
                    '&:hover': {
                      backgroundColor: i == 0 ? "#f2ecd8" : "#f5f1e6",
                      opacity: [0.7, 0.7, 0.7],
                    },
                    mb: 1,
                    borderRadius: 1,
                    cursor: 'pointer',
                  }}
                  onClick={() => { driveFolderHandleClick(g.id, event) }}
                >
                  <FolderIcon style={{
                    color: "#9aa0a6",
                    fontSize: 24,
                  }} />
                  <Typography sx={{
                    //color: "#9aa0a6",
                    color: i == 0 ? "#666666" : "#9aa0a6",
                    fontSize: 14,
                    fontWeight: 600,
                    pl: 1,
                    pt: 0.4
                  }}>{g.name}</Typography>
                </Box>
              ))}

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
