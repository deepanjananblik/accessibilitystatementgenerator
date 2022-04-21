import React from "react";

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../styles/ColorContrastSuggestions.module.css';

export default function ColorContrastSuggestions(props)
{

    const closeHandleClick = () => 
    {
        props.onClose();
    };

    const content = () => (
        <Box
            sx={{ width: 350 }}
            role="presentation"
        >
        <IconButton 
            id="close-button"
            color="primary" 
            component="span" 
            aria-label="close button" 
            onClick={closeHandleClick}
            aria-controls={'close-button'}
            aria-haspopup="true"
            aria-expanded={'true'}
            >
            <CloseIcon/>
        </IconButton>
        <Typography variant="h4" gutterBottom component="div">
            Color Contrast Suggestions
        </Typography>
        <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
        </Typography>
        </Box>
    );

    return(
    <div className={styles.container}>

      <main className={styles.main}>

        { content() }
        
      </main>
    </div>
    )
}