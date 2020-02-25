import React from 'react'
import { Flex, Heading } from 'rebass'

export default props =>
<Flex
    px={2}
    color='white'
    bg='black'
    alignItems='center' 
    sx={{
    position: 'fixed',
    right: 0,
    height: '100vh'
    }}>
    <Heading fontSize={[ 3, 4, 5 ]} p={2}
        sx={{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed'

    }}>
        Sili Mili
    </Heading>
</Flex>