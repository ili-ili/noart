import React from 'react'
import { ThemeProvider, Grid } from 'theme-ui'
import { Heading, Box, Text, Flex } from 'rebass'
import theme from './theme/base'
import SideNav from './components/SideNav'
import Footer from './components/Footer'

export default props =>
<ThemeProvider theme={theme}>
  <SideNav/>
  <Box
    pr={['7', '20vw', '30vw']}
    sx={{
      px: 4,
      py: 6,
      backgroundImage: 'url(/assets/tshirt.jpg)',
      backgroundSize: 'cover',
      color: '#000F02',
      bg: '#FBFFF7',
      height: '100vh'
    }}>
      <Heading widht={['90vw', '80vw', '60vw']} fontSize={[ 5, 6, 7 ]} alignSelf={'center'}>
        AI Art from Rijksmuseum
      </Heading>
      <img src='https://firebasestorage.googleapis.com/v0/b/sili-mili.appspot.com/o/faces.gif?alt=media&token=c0ac0c6b-24fd-48d4-b004-750e0e3763b6' />
      </Box>
  <Flex
    gap={0}
    flexWrap='wrap'
    sx={{
      overflow: 'hidden'
    }}>
    <Box p={3}
      width={[ 1, 1, 1/2 ]}
      display={'flex'}
      minHeight={['30vh', '30vh', 'calc(2/3*100vh)']}
      width={[ '100%', null, '30vw' ]}>
      <Heading fontSize={[ 4, 5, 6 ]} alignSelf={'center'}>
        AI re-envisioning classical portraits of Rijksmuseum
      </Heading>
    </Box>
    <Box p={3}
      width={[ 1, 1, 1/2 ]}
      minHeight={['30vh', '30vh', 'calc(2/3*100vh)']}
      height={'auto'}
      width={[ '100%', null, '30vw' ]}>
      <Text fontSize={[ 2, 3, 4 ]}>
        <p>AI Art has already started making history around the world.</p>
        <p>While some people fear that AI will replace humans in many areas - we believe that AI will expand the range of possibilities as well as become a new form of art expression.</p>
        <p>We believe that algorithmic art has its place in museums next to other forms of art, and will have its own period in the art history.</p>
        <p>We explore the AI as tool for creating an exhibition that would re-envision classical portraits or Rijksmuseum.</p>
      </Text>
    </Box>
  </Flex>
  <Box
    width={'100%'}
    sx={{
      px: 4,
      py: 6,
      backgroundImage: '',
      backgroundSize: 'cover',
      color: '#000F02',
      bg: '#FBFFF7',
      height: '100vh'
    }}>
      <Heading fontSize={[ 5, 6, 7 ]} alignSelf={'center'}>
        Training AI with the portraits from Rijksmuseum
      </Heading>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8D-CJnzdlyA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Box>
  <Flex
    gap={0}
    flexWrap='wrap'
    sx={{
      overflow: 'hidden'
    }}>
    <Box minHeight= {'100vh'}
      width={[ 1, 1, 2/3 ]}
      sx={{
        backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/sili-mili.appspot.com/o/set.jpg?alt=media&token=2941e7a6-457d-4e74-867d-39e416c6d59c)',
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
    <Box></Box>
  </Flex>
  <Flex
    gap={0}
    flexWrap='wrap'
    sx={{
      overflow: 'hidden'
    }}>
    <Box width={[ 1, 1, 1/2 ]} minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}
      sx={{
        backgroundImage: 'url(/assets/poster1.jpg)',
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
    <Box width={[ 1, 1, 1/2 ]} minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}
      sx={{
        backgroundImage: 'url(/assets/tshirt.jpg)',
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
    <Box width={[ 1, 1, 1/2 ]} minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}
      sx={{
        backgroundImage: 'url(/assets/busstop.jpg)',
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
    <Box width={[ 1, 1, 1/2 ]} p={3} display={'flex'} minHeight= {['30vh', '30vh', 'calc(2/3*100vh)']} bg='muted'>
      <Heading fontSize={[ 4, 4, 5 ]} alignSelf={'flex-end'}> Explorations </Heading>
      <img src='https://firebasestorage.googleapis.com/v0/b/sili-mili.appspot.com/o/0016.gif?alt=media&token=38bdac4f-7880-4274-bf2a-7d862b432b90' />
    </Box>
    <Box width={[ 1, 1, 1/2 ]} minHeight= {['30vh', '30vh', 'calc(2/3*100vh)']} bg='secondary'></Box>
    <Box width={[ 1, 1, 1/2 ]} minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}
      sx={{
        backgroundImage: 'url(/assets/poster2.jpg)',
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
</Flex>

    {/* <Tile p={3}
      sx={{
      minHeight: ['100vh', '100vh', 'calc(2/3*100vh)']}}>
      <Heading fontSize={[ 4, 5, 6 ]}> About </Heading>
    </Tile>
    <Tile p={3}
      sx={{
      minHeight: ['100vh', '100vh', 'calc(2/3*100vh)']}}>
      <Text fontSize={[ 1, 2, 3 ]}> trarara </Text>
    </Tile>
    <Tile p={3}
      sx={{
        backgroundSize: '100% auto',
        backgroundImage: 'url(/assets/tshirt3.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: ['100vh', '100vh', '100vh'],
        gridRow:'1/3', gridColumn:'2/4'
      }}>
        <Heading fontSize={[ 2, 3, 4 ]}>T-shirt</Heading>
    </Tile>
    <Tile p={3} color='background' bg='primary'
      sx={{
        // backgroundSize: '100% auto',
        backgroundImage: 'url(/assets/busstop.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: ['100vh', '100vh', 'calc(2/3*100vh)'],
        gridRow:'2/5', gridColumn:'1'
      }}>
        CSS Grid
    </Tile>
    <Tile p={3} color='background' bg='primary'
      sx={{
      backgroundSize: '100% auto',
      color: 'white',
      bg: 'white',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: ['100vh', '100vh', 'calc(2/3*100vh)'],
      gridRow:'3', gridColumn:'3'}}>
        CSS Grid
    </Tile>
    <Tile p={3} color='background' bg='primary'
      sx={{
      backgroundSize: '100% auto',
      color: 'white',
      bg: 'white',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: ['100vh', '100vh', 'calc(2/3*100vh)'],
      gridRow:'4', gridColumn:'2'}}>
        CSS Grid
    </Tile>
    <Tile p={3} color='background' bg='primary'
      sx={{
      backgroundSize: '100% auto',
      color: 'white',
      bg: 'white',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: ['100vh', '100vh', 'calc(2/3*100vh)'],
      gridRow:'4', gridColumn:'3'}}>
        CSS Grid
    </Tile>
    <Tile p={3} color='background' bg='primary'
      sx={{
      backgroundSize: '100% auto',
      color: 'white',
      bg: 'white',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: ['100vh', '100vh', 'calc(2/3*100vh)'],
      gridRow:'2/3', gridColumn:'2/3'}}>
        CSS Grid
    </Tile>
    <Tile p={3} color='background' bg='primary'
      sx={{
      backgroundSize: '100% auto',
      color: 'white',
      bg: 'white',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: ['100vh', '100vh', 'calc(2/3*100vh)'],
      gridRow:'2/3', gridColumn:'2/3'}}>
        CSS Grid
    </Tile>  */}
  {/* </Grid> */}

  {/* <Grid
    gap={0}
    columns={[1, 'auto auto']}
    sx={{
      backgroundSize: '100% auto',
            color: 'white',
            bg: 'white',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: ['100vh'],
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(1fr, 3fr))'
      // gridTemplateColumns: 'repeat(auto-fit, minmax(30vh, auto)'
    }}>
    <Tile
      bgImg='/assets/tshirt3.jpg'
      gridRow='1/3' />
    <Tile sx={{
      gridColumn: '1',
      gridRow: '2/3' }} bg='secondary'>Tile</Tile>
    <Tile sx={{
      gridColumn: '1',
      gridRow: '2/3' }} bg='primary'>Tile</Tile>
    <Tile sx={{
      gridColumn: '1',
      gridRow: '1/3' }} bg='muted'>Tile</Tile>
    <Tile  bg='primary'sx={{
      gridColumn: '1',
      gridRow: '1/3' }}><Heading fontSize={[ 6, 7, 8 ]}> Hello </Heading></Tile>
    <Tile sx={{
      gridColumn: '1/3',
      gridRow: '2/3' }} bg='secondary'>Tile</Tile>
    <Tile sx={{
      gridColumn: '1',
      gridRow: '1/3' }} bg='primary'>Tile</Tile>
    <Box p={5}
      sx={{
        gridColumn: '1',
        gridRow: '2/3'}}
      color='white'
      bg='primary'
    ><Heading fontSize={[ 6, 7, 8 ]}> HERE </Heading></Box>
  </Grid> */}
  <Footer/>
</ThemeProvider>