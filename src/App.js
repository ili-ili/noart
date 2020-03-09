import React from 'react'
import { ThemeProvider, Embed } from 'theme-ui'
import { Heading, Box, Text, Flex } from 'rebass'
import theme from './theme/base'
import SideNav from './components/SideNav'
import Footer from './components/Footer'

export default props =>
  <ThemeProvider theme={theme}>
    <SideNav />
    <Flex
      gap={0}
      flexWrap='wrap'
      sx={{
      overflow: 'hidden'
    }}>
      <Box width={[ 1, 1, 3 / 5 ]} minHeight={['80vh', '80vh', '100vh']}
        sx={{
        backgroundImage: 'url(https://d2yo6n1iu7b2zy.cloudfront.net/aiart/set.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat'
    }} />
      <Box width={[ 1, 1, 2 / 5 ]} p={4} display={'flex'} minHeight={['20vh', '20vh', '100vh']} bg='muted'>
        <Heading fontSize={[ 4, 4, 4 ]} alignSelf={'flex-end'}>
          <span style={{ color: '#aaa' }}>We are</span> Creating New Art with Artificial Intelligence
        </Heading>
      </Box>
    </Flex>
    {/* <Box
      display={'flex'}
      // pr={['7', '20vw', '30vw']}
      textAlign='right'
      sx={{
				px: 4,
				py: 5,
				// backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/sili-mili.appspot.com/o/0016.gif?alt=media&token=38bdac4f-7880-4274-bf2a-7d862b432b90)',
				backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/sili-mili.appspot.com/o/faces.gif?alt=media&token=c0ac0c6b-24fd-48d4-b004-750e0e3763b6)',
				// backgroundSize: 'auto 70%',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				backgroundPosition: 'left',
				color: 'black',
				bg: 'white',
				height: '100vh'
			}}>
      <Heading mt={'auto'} mr={'4'} mb={'2'} ml={'auto'} fontSize={[ 4, 5, 5 ]} textAlign='right' width={['100vw', '50vw', '40vw']} minWidth={['320px', '320px', '500px']}>
				AI re-envisioning classical portraits of Rijksmuseum
      </Heading>
    </Box> */}
    <Flex
      gap={0}
      flexWrap='wrap'
      sx={{
      overflow: 'hidden'
    }}>
      <Box p={[ 3, 3, 6 ]}
        width={[ 1, 1, 2 / 5 ]}
        display={'flex'}
        minHeight={['20px', '100px', 'auto']}>
        <Heading fontSize={[ 3, 3, 4 ]} width={1} textAlign='right'>
        About
        </Heading>
      </Box>
      <Box pr={[ 3, 3, '10vw' ]} pt={[ 0, 3, 6 ]} pl={[ 3, 3, 0 ]} pb={[ 4, 3, 0 ]}
        width={[ 1, 1, 3 / 5 ]}
        minHeight={['auto', 'auto', 'calc(2/3*100vh)']}
        height={'auto'}>
        {/* <Heading fontSize={[ 2, 3, 4 ]} alignSelf={'center'}>
        	AI re-envisioning classical portraits of Rijksmuseum
        </Heading> */}
        <Text fontSize={[ 1, 2, 2 ]}>
          <p>While some people fear that AI will replace humans in many areas - we believe that AI will expand the range of possibilities as well as become a new form of art expression.</p>
          <p>We believe that algorithmic art has its place in museums next to other forms of art, and will have its own period in the art history.</p>
          <p>We explore the AI as tool for creating an exhibition that would re-envision classical portraits or Rijksmuseum.</p>
          <p>We shaped these new portraits by manipulating numbers with algorithms.</p>
        </Text>
      </Box>
    </Flex>
    <Flex
      gap={0}
      flexWrap='wrap'
      sx={{
				overflow: 'hidden'
			}}>
      <Box width={[ 0, 0, 1 / 3 ]} />
      <Box minHeight={'100vh'}
        width={[ 1, 1, 2 / 3 ]}
        sx={{
					backgroundImage: 'url(/assets/flag.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
			}} />
    </Flex>
    <Box pt={3}>
      <Heading fontSize={[ 3, 3, 4 ]} p={[3, 4, 5]} width={[ 1, 1, 2 / 3 ]}>
        Training AI with the Portraits from Rijksmuseum to Generate New Unique Portraits
      </Heading>
      <Box
        width={['100vw', '80vw', '60vw']}
        alignSelf={'center'}
        height={['auto', 'auto', 'calc(2/3*100vh)']}
        mb={5} ml={'auto'} mr={'auto'} mt={2}>
        <Embed frameBorder='0' src='https://www.youtube.com/embed/8D-CJnzdlyA' />
      </Box>
    </Box>
    <Flex
      gap={0}
      flexWrap='wrap'
      sx={{
      overflow: 'hidden'
    }}>
      <Box pr={[ 2, 2, 3 ]} pt={[ 0, 2, 6 ]} pl={[ 3, 2, 5 ]} pb={[ 4, 2, 0 ]}
        width={[ 1, 1, 3 / 5 ]}
        minHeight={[ '320px', '500px', '600px' ]}
        height={['auto', 'auto', 'calc(2/3*100vh)']}>
        <Heading fontSize={[ 2, 3, 4 ]} alignSelf={'center'} pb={4}>
        	Technology
        </Heading>
        <Text fontSize={[ 1, 2, 2 ]} pr={[ 2, 2, 2 ]}>
          <p>We've collected the classic portraits from <a href='https://www.rijksmuseum.nl/en/rijksstudio' _target='blank'>Rijks Studio</a> to extract faces and create a dataset for training a deep neural network.</p>
          <p>We have been training multiple neural networks in parallel while experimenting with different combination of meta-parameters and exploring various different versions of DCGAN and StyleGAN architectures.</p>
          <p>We used 2 AWS GPU instances (g4dn.xlarge x1 T4 GPU) and 2 LambdaLabs (x4 1080ti GPU) instances to train different versions of networks.</p>
          <p>The trained networks were used to generate high fidelity <i>unique</i> portraits which are comparable on quality with the source portraits.</p>
        </Text>
      </Box>
      <Box width={[ 1, 3 / 4, 2 / 5 ]} minHeight={['100vh', '100vh', 'calc(2/3*100vh)']}
        sx={{
					backgroundImage: 'url(https://d2yo6n1iu7b2zy.cloudfront.net/aiart/0016-patrol-cycle.gif)',
					backgroundSize: 'auto 70%',
					backgroundColor: 'white', // '#15130a',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
				}} />
    </Flex>
    <Flex
      gap={0}
      flexWrap='wrap'
      sx={{
      overflow: 'hidden'
    }}>
      <Box width={[ 1, 1, 2 / 3 ]} minHeight={['100vh', '100vh', '100vh']}
        sx={{
        backgroundImage: 'url(/assets/poster1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }} />
      <Box width={[ 1, 1, 1 / 3 ]} p={3} display={'flex'} minHeight={['80px', 'auto', '100vh']} bg='muted'>
        <Heading fontSize={[ 3, 3, 4 ]} alignSelf={'flex-start'} pl={3}> Explorations </Heading>
      </Box>
    </Flex>
    <Flex
      gap={0}
      flexWrap='wrap'
      sx={{
      overflow: 'hidden'
    }}>
      <Box width={[ 1, 1, 1 / 2 ]} minHeight={['100vh', '100vh', 'calc(2/3*100vh)']}
        sx={{
        backgroundImage: 'url(/assets/tshirt.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }} />
      <Box width={[ 1, 1, 1 / 2 ]} minHeight={['100vh', '100vh', 'calc(2/3*100vh)']}
        sx={{
        backgroundImage: 'url(/assets/busstop.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }} />
    </Flex>
    <Flex
      gap={0}
      flexWrap='wrap'
      sx={{
      overflow: 'hidden'
    }}>
      <Box width={[ 1, 1, 1 / 3 ]} minHeight={['30vh', '30vh', '100vh']} bg='secondary' />
      <Box width={[ 1, 1, 2 / 3 ]} minHeight={['100vh', '100vh', '100vh']}
        sx={{
        backgroundImage: 'url(/assets/poster2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }} />
    </Flex>
    <Footer />
    <Text p={5} width={1} textAlign='center'> ❤️ </Text>
  </ThemeProvider>
