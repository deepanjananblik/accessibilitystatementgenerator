import React from "react";
import { Container, Grid, Box, Popover, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { PhotoshopPicker } from 'react-color';
import styles from '../../styles/ColorSelection.module.css';
import _ from 'underscore';
import { useDispatch, useSelector } from "react-redux";
import { addSecondaryColor, removeSecondaryColor } from "../../redux/actions/index";

export const SecondaryColorPalettes = () => {
    const [state, setState] = React.useState({
        displayColorPicker: false,
        defaultSecondaryPallateColor: "#FFFFFF",
        selectedColorSquashID: '0',
    });
    const [currentSecondaryColor, setcurrentSecondaryColor] = React.useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const counter = useSelector(state => state.counter);
    const secondaryColors = useSelector(state => state.data.selectedColors.secondaryColors);
    const helpContentForSecondaryHeading = useSelector(state => state.data.help.secondaryColorsSubHeading);

    const onClickSBCOpenHandler = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onClickSBCCloseHandler = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const popover =
    {
        position: "absolute",
        zIndex: "2",
        width: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const cover =
    {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        cursor: 'pointer',
    };

    const handleClick = (id, event) => {
        setState({
            ...state,
            displayColorPicker: true,
            selectedColorSquashID: id,
        });

    };


    const handleClose = () => {
        setState({ ...state, displayColorPicker: false });
    };

    const handleRemoveColorPallateClick = (event, id) => {
        event.preventDefault();
        dispatch(removeSecondaryColor({ index: id }));
    }

    const getColor = (secondaryColors) => {
        let index = secondaryColors.indexOf(secondaryColors[state.selectedColorSquashID]);
        return secondaryColors.length > 0 && index !== -1 ? secondaryColors[state.selectedColorSquashID].hex : state.defaultSecondaryPallateColor;
    }

    const handleColorChange1 = (color) => {
        setcurrentSecondaryColor(color.hex);
    }

    const handleColorChange = (color, event) => {
        setcurrentSecondaryColor(color.hex);
        event.preventDefault();
        dispatch(addSecondaryColor({ hexColor: color.hex, rgbColor: color.rgb, index: state.selectedColorSquashID, }));
    };

    return (

        <Container sx={{ marginTop: 2, }} disableGutters>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 15,
                fontWeight: 600,
            }}
                role="heading" aria-level="5"
            >
                Secondary Color
                <IconButton color="primary" aria-label="Secondary Color" aria-describedby={id} component="span" onClick={onClickSBCOpenHandler} size="small">
                    <HelpIcon style={{ color: "#ababab", fontSize: 17, marginTop: 5, }} />
                </IconButton>
            </Box>

            <Grid container item xs={12} spacing={0}>

                {secondaryColors.map((elem, i) => (
                    <Grid key={"cell_" + i} item lg={2} sm={4} xs={6}>
                        <Grid className={styles.colorBox}>
                            <Grid className={styles.colorBoxItem}>
                                <Box
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        borderTop: 1,
                                        borderBottom: 1,
                                        borderLeft: 1,
                                        borderRight: 1,
                                        borderColor: '#000000',
                                        borderRadius: 2,
                                        cursor: 'pointer',
                                        backgroundColor: elem.hexColor,
                                        '&:hover': {
                                            backgroundColor: elem.hexColor,
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                    onClick={() => { handleClick(i, event) }}
                                    aria-label="change secondary color"
                                    //aria-pressed={state.displayColorPicker}
                                    tabindex="0"
                                    role="button"
                                />
                                <Grid className={styles.colorBoxIconSection}>
                                    <h5 className={styles.colorText}>{elem.hexColor}</h5>
                                    <DeleteIcon fontSize="small" style={{ color: "#000000", fontSize: 18, cursor: 'pointer', }} onClick={() => { handleRemoveColorPallateClick(event, i) }} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}

                {secondaryColors.length < 6 ? (

                    <Grid key={"cell_" + secondaryColors.length < 1 ? 0 : secondaryColors.length} item lg={2} sm={4} xs={6}>
                        <Grid className={styles.colorBox}
                            aria-label="Add secondary color"
                            //aria-pressed={state.displayColorPicker}
                            tabindex="0"
                            role="button"
                            onClick={() => { handleClick(secondaryColors.length < 1 ? 0 : secondaryColors.length, event) }}>
                            <AddIcon fontSize="large" />

                        </Grid>


                    </Grid>

                ) : null}
                {state.displayColorPicker ? (

                    <Container style={popover}>
                        <Container style={cover} onClick={handleClose} />
                        <PhotoshopPicker
                            //color={getColor(secondaryColors)}
                            color={currentSecondaryColor}
                            onChange={handleColorChange1}
                            onChangeComplete={handleColorChange}
                        //onSwatchHover={handleColorChange}
                        />
                    </Container>

                ) : null}

            </Grid>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
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
                    style: { width: '20%', height: 'auto' },
                }}
            >
                <Typography sx={{ p: 1 }} variant="body2" gutterBottom>{helpContentForSecondaryHeading}</Typography>
            </Popover>


        </Container>

    )
};

export default SecondaryColorPalettes;