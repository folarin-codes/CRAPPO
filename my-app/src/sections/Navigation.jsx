import {useState} from 'react'
import { Divider, Stack, Link, styled ,Box} from '@mui/material'

import { StyledButton } from '../component/Button'


import Hamburger from '../images/hamburger.png'



const StyledStack = styled(Stack)(({ theme }) => ({
  
  flexDirection: "row",
  gap: '2em',
  alignItems:'center',

  [theme.breakpoints.down('md')]: {
    display: 'none',
    backgroundColor:'red'
  }

}))

function Navigation() {

 
  const onClickHandler = () => {
    
  }  

  return (
    <Box sx={{}}>
      
      <Stack direction={'row'} justifyContent="space-between">
      <img src='https://cypto-currency.vercel.app/static/media/logo.e44a93b92960b7a7a870e08a3080d60e.svg' />
      
              <StyledStack>
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

          <Divider orientation='vertical' sx={{borderColor:'#ffffff33', height:'18px', borderWidth:'1px'}}></Divider>
          
          <StyledButton>Register</StyledButton>

          
        </StyledStack>
        <Box onClick={()=> onClickHandler()} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
            <img src={Hamburger} style={{color:'white'}} />
         
            
        </Box>


        </Stack>
       </Box>
  )
}


export default Navigation


export const MobileNav = () => {

  const [showMenu, setShowMenu] = useState(false)
  
  

  return (
  
  <>

    { showMenu &&  
        
      <Stack backgroundColor="#252540" sx={{ position: 'fixed', width: '100%', height: "1000%", display: { md: 'none', xs: false && 'block' }, overflow: 'none', zIndex: 2 }}>
        
        <Stack alignContent={'center'} alignItems='center' alignSelf={'center'} gap={4}>
      
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
      
        <Stack>

   
          <Link href="#" underline="hover" color={'white'}>
            Login
          </Link>

          {/* <Divider orientation='vertical' sx={{ borderColor: '#ffffff33', height: '18px', borderWidth: '1px' }}></Divider>
       */}
          {/* <StyledButton>Register</StyledButton> */}
          </Stack>
          </Stack>
    
      
        </Stack>}
      
        </>
    
  )
}

