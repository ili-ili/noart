import React, { useState } from 'react'
import { Box, Heading } from 'rebass'

export default props => {
    const [isOpen, setOpen] = useState(false)
    return <Box
        px={2}
        color='#FBFFF7'
        bg='#000F02'
        onClick={() => setOpen(!isOpen)}
        sx={{
            position: 'fixed',
            right: [0, null, null],
            top: [null, null,  0],
            transition: 'width 0.3s',
            cursor: 'pointer',
            height: ['auto',  'auto', '100vh'],
            width: ['100vw', '100vw', isOpen ? '300px' : '60px']
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
        <p style={{ display: isOpen ? '' : 'none' }}>
            SiliMili is a creative team from Finland, exploring on the intersection of art and AI.
        </p>
    </Box>
}