import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { PreloaderWrap } from './formInput';

export default function CircularPreloader() {
    return (
        <PreloaderWrap>
        <Box sx={{ display: 'flex' }}>
            <CircularProgress style={{width:'120px', height:'120px'}} />
        </Box>
        </PreloaderWrap>
    );
}
