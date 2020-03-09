import React from 'react'
import { Flex, Heading, Text, Box } from 'rebass'

export default props =>
  <Flex id='about'
    gap={0}
    flexWrap='wrap'>
    <Box width={[ 1, 3 / 4, 1 / 2 ]}
      pt={6}
      pl={2}
      pr={4}>
      <Heading fontSize={[ 4, 4, 5 ]} pt={4} textAlign='right'>
        Ping us!
      </Heading>
      <Heading textAlign='right' fontSize={[ 4, 4, 5 ]} p={2}><a fontSize={[ 2, 3, 3 ]} href='mailto:hi@sili-mili.com'>hi@sili-mili.com</a></Heading>
      <Text fontSize={[ 1, 2, 2 ]} pt={4} pb={4} pl={6} textAlign={'right'}>
			SiliMili is a creative team from Finland, <br />exploring on the intersection of art and technology.
      </Text>
    </Box>
    <Box width={[ 1, 3 / 4, 1 / 2 ]} pt={5} minHeight={['30vh', '30vh', 'auto']}
      sx={{
					// backgroundImage: 'url(https://d2yo6n1iu7b2zy.cloudfront.net/aiart/faces.gif)',
					backgroundSize: 'cover',
					backgroundColor: 'white', // '#15130a',
					backgroundPosition: 'right',
					backgroundRepeat: 'no-repeat',
					margin: 'auto',
					textAlign: 'center'
				}} >
      <img src='https://d2yo6n1iu7b2zy.cloudfront.net/aiart/faces.gif' width='320' height='auto' />
    </Box>

  </Flex>
