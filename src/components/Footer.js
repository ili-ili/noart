import React from 'react'
import { Flex, Heading } from 'rebass'

export default props =>
<Flex
    p={6}
    flexDirection='column'
    alignItems='center'
    justifyContent='center' >
    <Heading fontSize={[ 3, 4, 5 ]} p={2}>
        Get in touch with us <a href='mailto:hi@sili-mili.com'>hi@sili-mili.com</a>
    </Heading>
    <div>❤️ SiliMili {new Date().getUTCFullYear()}</div>
</Flex>