import React from "react";
import { Container, Box, TextField, Typography, Select, MenuItem, Link, Button, RadioGroup, FormControlLabel, Radio, DesktopDatePicker } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import ChangeHighlight from "react-change-highlight";

export default function textchange() {
    const [companyName, setCompanyName] = React.useState("");
    const changeCompanyName = (event) => {
        if (event.target.value != "") {
            setCompanyName(event.target.value);
        }
        else {
            setCompanyName("");
        }
    };

    const [domainName, setDomainName] = React.useState("______");
    const changeDomainName = (event) => {
        if (event.target.value != "") {
            setDomainName(event.target.value);
        }
        else {
            setDomainName("______");
        }
    };

    const [wcagLevel, setWcagLevel] = React.useState("A");
    const changeWcagLevel = (event) => {
        if (event.target.value != "") {
            setWcagLevel(event.target.value);
        }
        else {
            setWcagLevel("______");
        }
    };

    const [wcagVersion, setWcagVersion] = React.useState("2.0");
    const changeWcagVersion = (event) => {
        if (event.target.value != "") {
            setWcagVersion(event.target.value);
        }
        else {
            setWcagVersion("______");
        }
    };

    const [phone, setPhone] = React.useState("______");
    const changePhone = (event) => {
        if (event.target.value != "") {
            setPhone(event.target.value);
        }
        else {
            setPhone("______");
        }
    };

    const [email, setEmail] = React.useState("______");
    const changeEmail = (event) => {
        if (event.target.value != "") {
            setEmail(event.target.value);
        }
        else {
            setEmail("______");
        }
    };

    const [websiteLink, setWebsiteLink] = React.useState("______");
    const changeWebsiteLink = (event) => {
        if (event.target.value != "") {
            setWebsiteLink(event.target.value);
        }
        else {
            setWebsiteLink("______");
        }
    };

    const organizational_items = [
        '•	Include accessibility as part of our mission statement.',
        '•	Have internal policies that take accessibility into account.',
        '•	Incorporate accessibility into our procurement practices.',
        '•	Have an appointed accessibility officer and/or ombudsperson.',
        '•	Provide our staff with continual accessibility training.',
        '•	Have clear organizational accessibility targets and responsibilities.',
        '•	Confirm to formal accessibility quality assurance methods.',
        '•	Other'
    ];
    const [organizationItemChecked, setOrganizationItemChecked] = React.useState([]);
    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...organizationItemChecked];
        if (event.target.checked) {
            console.log("@1");
            updatedList = [...organizationItemChecked, event.target.value];
        } else {
            console.log("@2");
            updatedList.splice(organizationItemChecked.indexOf(event.target.value), 1);
        }
        setOrganizationItemChecked(updatedList);
    };
    const organizational_items_heading = "In order to ensure accessibility we also:";

    const technical_items = [
        '•	HTML',
        '•	WAI-ARIA',
        '•	CSS',
        '•	JavaScript',
        '•	SMIL',
        '•	Other'
    ];
    const [technicalItemChecked, setTechnicalItemChecked] = React.useState([]);
    // Add/Remove checked item from list
    const handleTechnicalItemsCheck = (event) => {
        var updatedList = [...technicalItemChecked];
        if (event.target.checked) {
            updatedList = [...technicalItemChecked, event.target.value];
        } else {
            updatedList.splice(technicalItemChecked.indexOf(event.target.value), 1);
        }
        setTechnicalItemChecked(updatedList);
    };
    const technical_items_heading = "Technologies relied Upon";

    const confirmation_status = [
        'Fully conformant: the content fully conforms to the accessibility standard without any exceptions',
        'Partially conformant: some parts of the content do not fully conform to the accessibility standard (you can indicate these parts in later sections of this form)',
        'Non conformant: the content does not conform the accessibility standard',
        'Not assessed: the content has not been evaluated or the evaluation results are not available',
        'None'
    ];
    const [confirmationStatus, setConfirmationStatus] = React.useState("None");
    const handleConfirmationStatus = (event) => {
        if (event.target.value != "") {
            setConfirmationStatus(event.target.value);
        }
    };

    const [accessibilityConsideration, setAccessibilityConsideration] = React.useState("");
    const handleAccessibilityConsideration = (event) => {
        if (event.target.value != "") {
            setAccessibilityConsideration(event.target.value);
        }
    };

    const [accessibilityLimitation, setAccessibilityLimitation] = React.useState([]);
    const handleAccessbilityLimitation = () => {
        var updatedAccessbilityList = [...accessibilityLimitation, {
            title: "",
            description: ""
        }];
        setAccessibilityLimitation(updatedAccessbilityList);
        console.log({ accessibilityLimitation });
    };

    const reduceAccessbilityLimitation = (index) => {
        accessibilityLimitation.splice(index, 1);
        setAccessibilityLimitation(accessibilityLimitation);
    };

    const handleAccessibilityTitle = (event, index) => {
        accessibilityLimitation[index].title = event.target.value;
        setAccessibilityLimitation(accessibilityLimitation);
    };

    const handleAccessibilityDescription = (event, index) => {
        accessibilityLimitation[index].description = event.target.value;
        setAccessibilityLimitation(accessibilityLimitation);
    };

    // compatibility environment section
    const [compatibilityEnvironment, setCompatibilityEnvironment] = React.useState([]);
    const addCompatibilityEnvironment = () => {
        var updatedEnvironmentList = [...compatibilityEnvironment, {
            environment: ""
        }];
        setCompatibilityEnvironment(updatedEnvironmentList);
    };
    const handleCompatibilityEnvironment = (event, index) => {
        compatibilityEnvironment[index].environment = event.target.value;
        setCompatibilityEnvironment(compatibilityEnvironment);
    };
    const reduceCompatibilityEnvironment = (index) => {
        compatibilityEnvironment.splice(index, 1);
        setCompatibilityEnvironment(compatibilityEnvironment);
    };

    // compatibility environment section
    const [knownIncompatibility, setKnownIncompatibility] = React.useState([]);
    const addKnownIncompatibility = () => {
        var updatedKnownIncompatibility = [...knownIncompatibility, {
            environment: ""
        }];
        setKnownIncompatibility(updatedKnownIncompatibility);
    };
    const handleKnownIncompatibility = (event, index) => {
        knownIncompatibility[index].environment = event.target.value;
        setKnownIncompatibility(knownIncompatibility);
    };
    const reduceKnownIncompatibility = (index) => {
        knownIncompatibility.splice(index, 1);
        setKnownIncompatibility(knownIncompatibility);
    }

    //approval and complaint process
    const [approvalComplainProcess, setApprovalComplainProcess] = React.useState("");
    const handleApprovalComplainProcess = (event) => {
        if (event.target.value != "") {
            setApprovalComplainProcess(event.target.value);
        }
    };

    // Assessment Approach
    const assessmentApproachAry = [
        'Self-evaluation: the content was evaluated by your own organization or the developer of the content',
        'External evaluation: the content was evaluated by an external entity not involved in the design and development process'
    ];
    const [assessmentApproach, setAssessmentApproach] = React.useState("");
    const handleAssessmentApproach = (event) => {
        setAssessmentApproach(event.target.value);
    };

    // Date of publication
    const [dateOfPublication, setDateOfPublication] = React.useState(
        new Date('2014-08-18T21:11:54'),
    );
    const handleDateOfPublication = (newVal) => {
        setDateOfPublication(newVal);
    };
    return (
        <Container sx={{}} maxWidth="100%">
            <Box sx={{ bgcolor: '#ffffff' }}>
                <TextField id="outlined-basic" label="Company Name" variant="outlined" onChange={changeCompanyName} />
                <TextField id="outlined-basic" label="Domain Name" variant="outlined" onChange={changeDomainName} />
                <Select
                    value={wcagLevel}
                    onChange={changeWcagLevel}
                    inputProps={{
                        name: 'wcag_level',
                        id: 'wcag_level',
                    }}
                >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="AA">AA</MenuItem>
                    <MenuItem value="AAA">AAA</MenuItem>
                </Select>
                <Select
                    value={wcagLevel}
                    onChange={changeWcagVersion}
                    inputProps={{
                        name: 'wcag_version',
                        id: 'wcag_version',
                    }}
                >
                    <MenuItem value="2.0">2.0</MenuItem>
                    <MenuItem value="2.1">2.1</MenuItem>
                </Select>
                <TextField id="outlined-basic" label="Phone" variant="outlined" onChange={changePhone} type="number" />
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={changeEmail} />
                <TextField id="outlined-basic" label="Website Link" variant="outlined" onChange={changeWebsiteLink} />
                <Typography>Organizational Items</Typography>
                {organizational_items.map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" onClick={handleCheck} />
                        <span>{item}</span>
                    </div>
                ))}
                <Typography>Technical Items</Typography>
                {technical_items.map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" onClick={handleTechnicalItemsCheck} />
                        <span>{item}</span>
                    </div>
                ))}
                <Typography>Confirmation Status</Typography>
                <Select
                    value={confirmationStatus}
                    onChange={handleConfirmationStatus}
                    inputProps={{
                        name: 'confirmation_status',
                        id: 'confirmation_status',
                    }}
                >
                    {confirmation_status.map((item) => {
                        return <MenuItem value={item}>{item}</MenuItem>
                    })}
                </Select>
                <Typography>Accessibility Considaration</Typography>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Write something here..."
                    style={{ width: 200 }}
                    onChange={handleAccessibilityConsideration}
                />
                <Typography>Accessibility Limitations</Typography>
                {
                    accessibilityLimitation.map((item, index) => {
                        return <>
                            <TextField label="Title" variant="outlined" onChange={(event) => handleAccessibilityTitle(event, index)} />
                            <TextareaAutosize aria-label="empty textarea" placeholder="Write something here..." style={{ width: 200 }} onChange={(event) => handleAccessibilityDescription(event, index)} />
                            <Button style={{ width: 50, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, }} onClick={() => reduceAccessbilityLimitation(index)}>Remove</Button>
                        </>
                    })
                }
                <Button style={{ width: 50, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, }} onClick={handleAccessbilityLimitation}>Add</Button>
                <Typography>Compatibility with user environment</Typography>
                {
                    compatibilityEnvironment.map((item, index) => {
                        return <>
                            <TextField label="Environment" variant="outlined" onChange={(event) => handleCompatibilityEnvironment(event, index)} />
                            <Button style={{ width: 50, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, }} onClick={() => reduceCompatibilityEnvironment(index)}>Remove</Button>
                        </>
                    })
                }
                <Button style={{ width: 50, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, }} onClick={addCompatibilityEnvironment}>Add</Button>
                <Typography>Known Incompatibility</Typography>
                {
                    knownIncompatibility.map((item, index) => {
                        return <>
                            <TextField label="Environment" variant="outlined" onChange={(event) => handleKnownIncompatibility(event, index)} />
                            <Button style={{ width: 50, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, }} onClick={() => reduceKnownIncompatibility(index)}>Remove</Button>
                        </>
                    })
                }
                <Button style={{ width: 50, backgroundColor: '#e43e3e', color: '#fff', padding: 8, fontSize: 14, }} onClick={addKnownIncompatibility}>Add</Button>
                <Typography>Approval and complaints process</Typography>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Write something here..."
                    style={{ width: 200 }}
                    onChange={handleApprovalComplainProcess}
                />
                <Typography>Assessment approach</Typography>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    {
                        assessmentApproachAry.map((item) => {
                            return <FormControlLabel value={item} control={<Radio />} label={item} onChange={handleAssessmentApproach} />
                        })
                    }
                </RadioGroup>
                <Typography>Date of Publication</Typography>
                {/* <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={dateOfPublication}
                    onChange={handleDateOfPublication}
                    renderInput={(params) => <TextField {...params} />}
                /> */}
            </Box>
            <Box sx={{ bgcolor: '#ffffff', height: '50vh' }}>
                Our Aim <ChangeHighlight><Typography ref={React.createRef()}>{companyName}</Typography></ChangeHighlight> is committed to ensuring digital accessibility for people with disabilities. We continue to make changes to improve the user experience for everyone and apply the relevant accessibility standards.The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Wherever possible, <ChangeHighlight><Typography ref={React.createRef()}>{companyName}</Typography></ChangeHighlight> will aim to adhere to level <ChangeHighlight><Typography ref={React.createRef()}>{wcagLevel}</Typography></ChangeHighlight> of the WCAG <ChangeHighlight><Typography ref={React.createRef()}>{wcagVersion}</Typography></ChangeHighlight> guidelines, which states that sites should be: Perceivable - Information and user interface components must be presentable to users in ways they can perceive. Operable - User interface components and navigation must be operable. Understandable - Information and the operation of user interface must be understandable. Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.
                {
                    organizationItemChecked.length === 0 ? "" :
                        <>
                            <ChangeHighlight><Typography ref={React.createRef()}>{organizational_items_heading}</Typography></ChangeHighlight>
                            {organizationItemChecked.map((item) => {
                                return <ChangeHighlight><Typography ref={React.createRef()}>{item}</Typography></ChangeHighlight>
                            })}
                        </>
                }
                {
                    technicalItemChecked.length === 0 ? "" :
                        <>
                            <ChangeHighlight><Typography ref={React.createRef()}>{technical_items_heading}</Typography></ChangeHighlight>
                            {technicalItemChecked.map((item) => {
                                return <ChangeHighlight><Typography ref={React.createRef()}>{item}</Typography></ChangeHighlight>
                            })}
                        </>
                }
                As part of our efforts to achieve WCAG <ChangeHighlight><Typography ref={React.createRef()}>{wcagVersion}</Typography></ChangeHighlight> <ChangeHighlight><Typography ref={React.createRef()}>{wcagLevel}</Typography></ChangeHighlight> compliance, we use Monsido as an ongoing monitoring service. We welcome your feedback on the accessibility of the  website. If you have experienced any accessibility barriers while using any part of <ChangeHighlight><Typography ref={React.createRef()}>{domainName}</Typography></ChangeHighlight>, please let us know:
                Phone: <ChangeHighlight><Typography ref={React.createRef()}>{phone}</Typography></ChangeHighlight>

                E-mail: <ChangeHighlight><Typography ref={React.createRef()}>{email}</Typography></ChangeHighlight>

                Get in touch with us at: <ChangeHighlight><Link to="/${websiteLink}" ref={React.createRef()}>{websiteLink}</Link></ChangeHighlight>
                <ChangeHighlight><Typography ref={React.createRef()}>{confirmationStatus}</Typography></ChangeHighlight>
                <ChangeHighlight><Typography ref={React.createRef()}>{accessibilityConsideration}</Typography></ChangeHighlight>
                <ChangeHighlight>
                    <Box ref={React.createRef()}>
                        {
                            accessibilityLimitation.map((item, index) => {
                                return <>
                                    <Typography>Accessibility limitation {index + 1}</Typography>
                                    <Typography>{item.title}</Typography>
                                    <Typography>{item.description}</Typography>
                                </>
                            })
                        }
                    </Box>
                </ChangeHighlight>
                <ChangeHighlight>
                    <Box ref={React.createRef()}>
                        {
                            compatibilityEnvironment.map((item, index) => {
                                return <>
                                    <Typography>Environment {index + 1}</Typography>
                                    <Typography>{item.environment}</Typography>
                                </>
                            })
                        }
                    </Box>
                </ChangeHighlight>
                {
                    knownIncompatibility.map((item, index) => {
                        return <>
                            <ChangeHighlight><Typography ref={React.createRef()}>Environment {index + 1}</Typography></ChangeHighlight>
                            <Typography>{item.environment}</Typography>
                        </>
                    })
                }
                <ChangeHighlight><Typography ref={React.createRef()}>{approvalComplainProcess}</Typography></ChangeHighlight>
                <ChangeHighlight><Typography ref={React.createRef()}>{assessmentApproach}</Typography></ChangeHighlight>
            </Box>
        </Container>
    );
}