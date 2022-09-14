import React from 'react'
import Navigation from './Navigation'
import { Stack, Box, Typography , styled, Button } from '@mui/material'
import headerImg from '../images/hero.png'
import image from '../images/why.png'
import background from '../images/hero-bg.png'

const StyledHeader = styled(Stack)({
      // backgroundImage: background,
      flexDirection: 'row',
      // padding: '4em 3em',
      marginTop: '3em',
      justifyContent:'space-between'
})

function Header() {
      return (
        
            <Box sx={{backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat', backgroundSize:'cover', padding:'4em 3em' }}>
                  <Navigation/>
                  <StyledHeader  >
                  <Box flex={1} alignSelf='center'>
                        <Typography variant='h1' sx={{fontWeight:'600', color:'white', marginBottom:'.5em'}}>
                              Fastest & Secure Plaform to Invest in Crypto
                        </Typography>

                        <Typography variant='p' component={'p'} color='white'>
                              buy and sell cryptocurrencies by trusted 10M wallets , in over 100M transactions
                              </Typography>
                              <Button sx={{color:'white'}}>
                                    Try for free
                              </Button>
                        
                  </Box>

                  <Box flex={1} alignSelf='center'>
                        <img src={ headerImg} style={{width:'80%'}} />
                  </Box>
                  
            
                  </StyledHeader>

                  <Stack direction={'row'}>
                        
                        <Box flex={1} alignSelf='center'>
                              <img src={image }   style={{width:'90%'}}/>

                        </Box>

                        <Box flex={1} alignSelf='center'>
                              <Typography variant='h2' component='h2' color='white' mb='0.5em'>
                                    why you should choose CHAPPO
                              </Typography>

                              <Typography variant='p' color='white'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellat illum aliquid ipsum laborum dolores veniam quia accusamus, consequatur numquam dolore! Incidunt alias voluptate possimus dolorem obcaecati, quia distinctio! Laborum!
                              

                              </Typography>

                        </Box>
                  </Stack>

                  <Box>
                        <Typography variant='h2' component={'h2'} color='white' textAlign='center' mb={'0.5em'}> How Much Can You Earn With Us</Typography>

                        <Typography variant='p' component='p' color='white' textAlign='center' fontWeight={200}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellat illum aliq</Typography>
                  </Box>
            </Box>
  )
}

export default Header