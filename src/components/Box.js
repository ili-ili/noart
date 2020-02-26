import React from 'react'
import { Box } from 'rebass'

export default props =>
    <Box
        {...props}
        minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}>
        {props.children}
    </Box>