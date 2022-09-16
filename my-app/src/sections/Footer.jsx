import { Stack, Typography, Box, Link, styled } from '@mui/material';
import visaImg from '../images/visa.png'
import masterCardImg from '../images/mastercard.png'
import btcImg from '../images/bitc.png'

import background from '../images/hero-bg.png'

const StyledLink = styled(Link)({
      color: '#E0E0E0',
      textDecoration:'none',

     
})

const StyledFooter = styled(Stack)(({ theme }) => ({
      
      flexDirection: 'row',
      gap: '3em',
      justifyContent:'space-between',
     
      [theme.breakpoints.down('md')]: {
            flexDirection: 'column', 
      }
}))


const Footer = () => {
      return (
            <Box padding={'4em 5vw'} sx={{backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}>
                  <StyledFooter>
                        
                        <Stack>
                              <img src='https://cypto-currency.vercel.app/static/media/logo.e44a93b92960b7a7a870e08a3080d60e.svg' />
                              
                             
                        </Stack>

                        <Stack gap={2}>
                              <Typography variant='h3' color='white' component={'h3'}>Quick Links</Typography>
                              <StyledLink>Home</StyledLink>
                              <StyledLink>Produtcs</StyledLink>
                              <StyledLink>About</StyledLink>
                              <StyledLink>Features</StyledLink>
                              <StyledLink>Contact</StyledLink>
                        </Stack>

                        <Stack gap={2}>
                              <Typography variant='h3' color='white' component={'h3'}>Resources Links</Typography>
                              <StyledLink>Download Whitepaper</StyledLink>
                              <StyledLink>Smart Tokens</StyledLink>
                              <StyledLink>Blockchain Explore</StyledLink>
                              <StyledLink>Crypto API</StyledLink>
                              <StyledLink>Interest</StyledLink>
                        </Stack>

                        <Stack gap={2}>
                              <Typography variant='h3' color='white' component={'h3'}>We accept following payment systems</Typography>

                              <Stack direction={'row'} gap={2}>
                                    <img src={visaImg} />
                                    <img src={masterCardImg} />
                                    <img src={btcImg} />
                              </Stack>
                              
                        </Stack>

                        

                  </StyledFooter>

            </Box>
            
      )
}

export default Footer;