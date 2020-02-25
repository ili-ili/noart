import React from 'react'
import { ThemeProvider, Grid } from 'theme-ui'
import { Heading, Flex, Text, Link, Box } from 'rebass'
import theme from './theme/base'
import Tile from './components/Box'
import SideNav from './components/SideNav'
import Footer from './components/Footer'

export default props =>
<ThemeProvider theme={theme}>
  {/* <Box
    p={0}
    sx={{
      display: 'grid',
      gridGap: 0,
      gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
    }}>
    <Heading fontSize={[ 6, 7, 8 ]}> Hello </Heading>
    <Box p={3} color='background' bg='primary'>CSS Grid</Box>
  </Box> */}
<SideNav/>
<Box
  sx={{
    px: 4,
    py: 6,
    backgroundImage: 'url(https://source.unsplash.com/random/1024x768?sky)',
    backgroundSize: 'cover',
    color: 'white',
    bg: 'gray',
    height: '100vh'
  }}></Box>
  <Grid
    gap={0}
    columns={[1, 'auto auto']}
    sx={{
      minHeight: ['100vh'],
      display: 'grid',
      //gridTemplateColumns: 'repeat(auto-fit, minmax(1fr, 3fr))'
      gridTemplateColumns: 'repeat(auto-fit, minmax(30vh, auto)'
    }}>
    <Tile sx={{
      gridColumn: '1',
      gridRow: '1/3'
      }}><Heading fontSize={[ 6, 7, 8 ]}> Hello </Heading></Tile>
    <Tile sx={{      
      gridColumn: '1',
      gridRow: '2/3' }} bg='muted'>Tile</Tile>
    <Tile sx={{      
      gridColumn: '1',
      gridRow: '2/3' }} bg='primary'>Tile</Tile>
    <Tile sx={{      
      gridColumn: '1',
      gridRow: '1/3' }} bg='muted'>Tile</Tile>
    <Tile sx={{      
      gridColumn: '1',
      gridRow: '1/3' }}><Heading fontSize={[ 6, 7, 8 ]}> Hello </Heading></Tile>
    <Tile sx={{      
      gridColumn: '1',
      gridRow: '2/3' }} bg='muted'>Tile</Tile>
    <Tile sx={{      
      gridColumn: '1',
      gridRow: '1/3' }} bg='primary'>Tile</Tile>
    <Box p={5}
      sx={{      
        gridColumn: '1',
        gridRow: '1/2'}}
      color='white'
      bg='primary'
    ><Heading fontSize={[ 6, 7, 8 ]}> HERE </Heading></Box>
  </Grid>
  <Footer/>
</ThemeProvider>