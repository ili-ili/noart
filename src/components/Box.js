import React from 'react'
import { Box } from 'rebass'

export default props =>
    <Box    
        {...props}
        p='4'
        sx={{
            minHeight: '50vh',
            // width: '50vw',
            // minWidht: '300px'
        }}
        >
        {props.children}
    </Box>