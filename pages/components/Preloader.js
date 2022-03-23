import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Preloader( props ) 
{
  return (
    <Box 
        sx={{
            width: '18%',
            height: '12%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor : '#FFFFFF',
            pl : 1,
        }}>
      <CircularProgress/>
      <Typography 
        sx={{ pl : 2 }}
        variant="caption">
            { props.caption }
        </Typography>
    </Box>
  );
}