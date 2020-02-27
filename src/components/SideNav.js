import React from 'react'
import { Box, Heading } from 'rebass'

export default props =>
<Box
    px={2}
    color='#FBFFF7'
    bg='#000F02'
    sx={{
        position: 'fixed',
        right: [0, null, null],
        top: [null, null,  0],
        height: ['auto', 'auto', '100vh'],
        width: ['100vw', '100vw', 'auto']
    }}>
    <Heading fontSize={[ 4, 5, 4 ]} 
        p={2}
        mt={3}
        sx={{
            writingMode: ['unset', 'unset', 'vertical-rl'], 
            textOrientation: 'mixed',
            textAlign: 'right'
        }}>
        Sili Mili
    </Heading>
</Box>