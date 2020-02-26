import React from 'react'
import { ThemeProvider, Grid } from 'theme-ui'
import { Heading, Box, Text } from 'rebass'
import theme from './theme/base'
import SideNav from './components/SideNav'
import Footer from './components/Footer'

export default props =>
<ThemeProvider theme={theme}>
  <SideNav/>
  <Box
    sx={{
      px: 4,
      py: 6,
      backgroundImage: 'url(/assets/tshirt.jpg)',
      backgroundSize: 'cover',
      color: '#000F02',
      bg: '#FBFFF7',
      height: '100vh'
    }}><Heading fontSize={[ 5, 6, 7 ]} alignSelf={'center'}> PUNCH goes heer </Heading></Box>
  <Grid
    gap={0}
    columns={[2, '1fr 1fr']}
    sx={{
      overflow: 'hidden'
    }}>
    <Box p={3}
      display={'flex'}
      minHeight={['100vh', '100vh', 'calc(2/3*100vh)']}
      width={[ '100vw', null, '30vw' ]}>
      <Heading fontSize={[ 4, 5, 6 ]} alignSelf={'center'}> About </Heading>
    </Box>
    <Box p={3}
      minHeight={['100vh', '100vh', 'calc(2/3*100vh)']}
      width={[ '100vw', null, '30vw' ]}>
      <Text fontSize={[ 2, 3, 4 ]}> trarara </Text>
    </Box>
  </Grid>
  <Box
    width={'100vw'}
    sx={{
      px: 4,
      py: 6,
      backgroundImage: 'url(/assets/tshirt.jpg)',
      backgroundSize: 'cover',
      color: '#000F02',
      bg: '#FBFFF7',
      height: '100vh'
    }}><Heading fontSize={[ 5, 6, 7 ]} alignSelf={'center'}> Progress GIF here </Heading></Box>
  <Grid
    gap={0}
    columns={[2, '2fr 1fr']}
    sx={{
      overflow: 'hidden'
    }}>
    <Box minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}
      sx={{ 
        backgroundImage: 'url(/assets/set.png)',      
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
    <Box></Box>
  </Grid>
  <Grid
    gap={0}
    columns={[2, '1fr 1fr']}
    sx={{
      overflow: 'hidden'
    }}>
    <Box minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}
      sx={{ 
        backgroundImage: 'url(/assets/poster1.jpg)',      
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
    <Box minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}
      sx={{ 
        backgroundImage: 'url(/assets/tshirt.jpg)',      
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
    <Box minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}
      sx={{ 
        backgroundImage: 'url(/assets/busstop.jpg)',      
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
    <Box p={3} display={'flex'} minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']} bg='muted'><Heading fontSize={[ 3, 4, 5 ]} alignSelf={'flex-end'}> Examples </Heading></Box>
    <Box minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']} bg='secondary'></Box>
    <Box minHeight= {['100vh', '100vh', 'calc(2/3*100vh)']}
      sx={{ 
        backgroundImage: 'url(/assets/poster2.jpg)',      
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}/>
</Grid>

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
        backgroundSize: 'auto 100%',
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
        // backgroundSize: 'auto 100%',
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