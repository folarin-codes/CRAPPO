import { Stack, Typography, Box, Link, styled } from '@mui/material';
import visaImg from '../images/visa.png'
import masterCardImg from '../images/mastercard.png'
import btcImg from '../images/btc.png'

import background from '../images/hero-bg.png'

const StyledLink = styled(Link)({
      color: '#E0E0E0',
      textDecoration:'none',

     
})


const Footer = () => {
      return (
            <Box padding={'4em 3em'} sx={{backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}>
                  <Stack direction={'row'} gap={3} justifyContent='space-between'>
                        <Stack>
                              <img />
                              
                              <Typography variant='h3' color='white' component={'h3'} >CRAPPO</Typography>
                              
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
                              <Typography variant='h3' color='white' component={'h3'}>Resources Links</Typography>
                              <Stack direction={'row'}>
                                    <img src={visaImg} />
                                    <img src={masterCardImg} />
                                    <img src={btcImg} />
                             </Stack>
                        </Stack>

                        

                  </Stack>

            </Box>
            
      )
}

export default Footer;