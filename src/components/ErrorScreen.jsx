import React from 'react'
import {Box,styled,Typography} from '@mui/material'

const Image= styled('img')({
        width: '70%',
        height: 'auto',
        objectPosition: 'center 0%',
        margin: 'auto'
})

export default function ErrorScreen() {
    const error = 'https://i.stack.imgur.com/01tZQ.png';

  return (

    <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <Box style={{ display: 'flex' }}>
                <Image src={error} alt="error"  />
            </Box>
        </Box>
  )
}
