import React, { useState } from 'react'
import { Box, Heading } from 'rebass'

export default props => {
	// const [isOpen, setOpen] = useState(false)
	return <Box
  px={2}
  color='#FBFFF7'
  bg='transparent'
  sx={{
		position: 'fixed',
		right: 0,
		top: 0,
		transition: 'width 0.3s',
		cursor: 'pointer',
		height: ['auto', 'auto', '100vh'],
		width: 'auto'
	}}>
  <a href='#about' style={{ color: 'black', textDecoration: 'none' }}>
    <Heading fontSize={[4, 5, 4]}
      p={2}
      mt={3}
      sx={{
				writingMode: 'vertical-rl',
				textOrientation: 'mixed',
				textAlign: 'right'
			}}>
			Sili Mili
    </Heading>
  </a>
</Box>
}
