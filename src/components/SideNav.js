import React from 'react'
import { Box, Heading } from 'rebass'

export default props =>
<Box
    px={2}
    color='white'
    bg='black'
    sx={{
        position: 'fixed',
        right: [0, null, null],
        top: [null, null,  0],
        height: ['auto', 'auto', '100vh'],
        width: ['100vw', '100vw', 'auto']
    }}>
    <Heading fontSize={[ 3, 4, 5 ]} 
        p={2}
        sx={{
            writingMode: ['unset', 'unset', 'vertical-rl'], 
            textOrientation: 'mixed',
            textAlign: 'right'
        }}>
        Sili Mili
    </Heading>
</Box>