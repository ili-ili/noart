import React from 'react'
import { Box } from 'rebass'

export default props =>
    <Box
        {...props}
        p={5}
        fontSize={4}>
        {/* sx={{ 
            minHeight: ['100vh', '100vh', 'calc(2/3*100vh)']
            // backgroundImage: 'url('+ {...props.bgImg}+')',      
            // backgroundSize: '100% auto',
            // color: 'white',
            // bg: 'white',
            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat'
        }}> */}
        {props.children}
    </Box>