import {useState } from 'react'
import { Divider, Stack, Link, styled ,Box} from '@mui/material'

import { StyledButton } from '../component/Button'


import background from '../images/hero-bg.png'


import Hamburger from '../images/menu-icon.svg'

import cross from '../images/cross.png'


const MobileNavStack = styled(Stack)(({ theme }) => ({

  display: "flex",
  justifyContent: 'space-between',
  flexDirection: 'row',
  backgroundImage: `url(${background})`,
  paddingTop: '1em',

  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
  
}))

const StyledStack = styled(Stack)(({ theme }) => ({
  
  flexDirection: "row",
  gap: '2em',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    display: 'none',
    backgroundColor:'red'
  }

}))

function Navigation() {

 
  const onClickHandler = () => {
    
  }  

  return (
    <Box sx={{display:{xs:'none', sm:'none', md:"block"}}} >
      
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


  const onClickHandler = () => {
    setShowMenu(true)
  }
  
  

  return (
  
    <MobileNavStack sx={{ padding: showMenu ? '0' : '1em 5vw 0'}}>
      
      <img src='https://cypto-currency.vercel.app/static/media/logo.e44a93b92960b7a7a870e08a3080d60e.svg' />
      

    { showMenu &&  
        
      <Stack backgroundColor="#252540" sx={{ position: 'fixed', width: '100%', height: "100%", display: { md: 'none', xs: false && 'block', transition:'all 5s ease' }, overflow: 'none', zIndex: 2 }}>
        
          <Stack alignContent={'center'} alignItems='center' alignSelf={'center'} gap={4} sx={{overscrollBehavior:'contain' , overflow:"hidden"}}>
            
            <Box position='absolute' right={'2em'} top='3em' onClick={()=> setShowMenu(false)}>
              <img src={cross} />
            </Box>

            <Stack gap={4} alignItems='center' justifyContent='center' alignSelf={'center'} sx={{margin:'60vw 0 0'}} >

          
      
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
              </Stack>
      
        <Stack direction='row' gap={3}  alignItems={'center'}>

   
          <Link href="#" underline="hover" color={'white'}>
            Login
          </Link>

          <Divider orientation='vertical' sx={{ borderColor: '#ffffff33', height: '18px', borderWidth: '1px' }}></Divider>
      
          <StyledButton>Register</StyledButton>
          </Stack>
          </Stack>
    
      
        </Stack>}
      
        <Box onClick={onClickHandler}  sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
            <img src={Hamburger} style={{color:'white'}} />
         
            
        </Box>

      
        </MobileNavStack>
    
  )
}

