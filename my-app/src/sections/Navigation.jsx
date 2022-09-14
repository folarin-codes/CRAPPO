import React from 'react'
import {AppBar, Container , Stack , Link , styled} from '@mui/material'


// const StyledLink = styled(Link)({
//       color: 'white',
//       underline
// })
function Navigation() {
  return (
        <Container>
              hello world
              <Stack direction={'row'} gap={2} marginRight={'20vw'}>
                <Link href="#" underline="hover" color={'white'}>
                  Products
                </Link>
                  <Link href="#" underline="hover" color={'white'}>
                 Features
                  </Link>
                  <Link href="#" underline="hover" color={'white'}>
                  About
                    </Link>
                    <Link href="#" underline="hover" color={'white'}>
                  Contact
                    </Link>
                    <Link href="#" underline="hover" color={'white'}>
                  Login
                    </Link>
                
              </Stack>
       </Container>
  )
}

export default Navigation