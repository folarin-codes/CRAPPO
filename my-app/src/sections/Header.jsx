
import Navigation from './Navigation'
import { Stack, Box, Typography , styled, TextField, InputLabel,Select, FormControl,MenuItem } from '@mui/material'
import headerImg from '../images/hero.png'
import image from '../images/why.png'

import globeImg from '../images/globe.png'
import userImg from '../images/user.png'
import barImg from '../images/bar.png'
import background from '../images/hero-bg.png'

import { StyledButton } from '../component/Button'

const StyledHeader = styled(Stack)(({ theme }) => ({
      
      flexDirection: 'row',
   
      marginTop: '1em',
      justifyContent: 'space-between',
      marginBottom: "1em",

      [theme.breakpoints.down('md')]: {
            flexDirection:'column'
           
      }
}))

const IconContainer = styled(Stack)(({ theme }) => ({
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '2em',
     padding:"2em 0 ",
      [theme.breakpoints.down('md')]: {
            flexDirection:'column'
      }
      
}))

const StyledBox = styled(Box)({
      width:'50px', height:'50px', borderRadius:"50%", backgroundColor:'#4B5563', display:"flex"
})

const StyledComponent = styled(Stack)(({ theme }) => ({
      
      flexDirection: 'row',
      marginBottom:'4em',

      [theme.breakpoints.down('md')]: {
            flexDirection:'column-reverse'
           
      }
}))

const StyledBanner =  styled(Stack)(({ theme }) => ({
      
      position: 'relative',
      top: '7em',
      backgroundColor: "white", borderRadius: '15px', padding: '2em 2em', gap: '1em', margin:"0 auto", width:'90%',
       

      [theme.breakpoints.down('md')]: {
            flexDirection:'column'
           
      }
}))

const InnerStack =  styled(Stack)(({ theme }) => ({
      
      flexDirection: 'row',
      justifyContent: "space-between",
      gap: '1em',
      alignItems:"center",

      [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems:"flex-start"
           
      }
}))


function Header() {
      return (
        
            <Box sx={{backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat', backgroundSize:'cover', padding:'1em 5vw 0em ', position:'relative', zIndex:1 }}>
                  <Navigation/>
                  <StyledHeader  >
                        <Box flex={1} alignSelf='center'>
                              <Stack gap={3} sx={{backgroundColor:' rgb(75 85 99)', borderRadius:"4em", color:'white' , width:{xs:'90%', sm:'55%', md:'70%'}, fontSize:'12px', alignItems:'center'}} direction="row" padding={'.4em .4em'} mb='2em'>
                                    <Box sx={{backgroundColor:"white", borderRadius:'4em', color:'#9ca3af'}} padding='.3em .7em'>
                                       70% Save
                                    </Box>
                                    for the best black friday deals
                              </Stack>
                        <Typography variant='h1' sx={{fontWeight:'600', color:'white', marginBottom:'0.5em'}}>
                              Fastest & Secure Plaform to Invest in Crypto
                        </Typography>

                        <Typography variant='p' component={'p'}  mb={'0.5em'}>
                              buy and sell cryptocurrencies by trusted 10M wallets , in over 100M transactions
                              </Typography>
                              <StyledButton>
                                    Try for FREE
                              </StyledButton>
                        
                  </Box>

                  <Box flex={1} alignSelf='center'>
                        <img src={ headerImg} style={{width:'80%'}} alt='background ' />
                  </Box>
                  
            
                  </StyledHeader>

                  <IconContainer>
                        
                        <Stack direction='row' gap={2}>
                              <StyledBox>
                                    
                                    <img src={barImg} style={{margin:'auto'}} alt='a bar logo' />

                              </StyledBox>
                              <Box>
                                    <Typography variant='h3' component={'h3'} sx={{color:'white'}}>$30B</Typography>
                                    <Typography variant='p' component={'p'}>Digital Currency Exchange</Typography>
                              </Box>

                        </Stack>

                        <Stack direction='row' gap={2}>
                              <StyledBox>
                                    
                        <img src={globeImg} style={{margin:'auto'}} alt='a globe logo' />

                              </StyledBox>
                              <Box>
                                    <Typography variant='h3' component={'h3'} sx={{color:'white'}}>190+</Typography>
                                    <Typography variant='p' component={'p'}>Countries Around The World</Typography>
                              </Box>

                              
                              
                        </Stack>

                        <Stack direction='row' gap={2}>
                              <StyledBox>
                                    
                        <img src={userImg} style={{margin:'auto'}} alt='a user logo' />

                              </StyledBox>
                              <Box>
                                    <Typography variant='h3' component={'h3'} sx={{color:'white'}}>$10M</Typography>
                                    <Typography variant='p' component={'p'}>Trusted Wallet Investors</Typography>
                              </Box>
                        </Stack>

                  </IconContainer>

                  <StyledComponent>
                        
                        <Box flex={1} alignSelf='center'>
                              <img src={image }   style={{width:'90%'}}/>

                        </Box>

                        <Box flex={1} alignSelf='center'>
                              <Typography variant='h2' component='h2' color='white' sx={{ fontWeight:'300'}} mb={'.1em'}>
                                    why you should choose CHAPPO
                              </Typography>

                              <Typography variant='p' component={'p'}  mb='1em'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellat illum aliquid ipsum laborum dolores veniam quia accusamus
                              

                              </Typography>

                              <StyledButton>
                                    learn more
                              </StyledButton>

                        </Box>
                  </StyledComponent>

                  <Box position="relative" top='4em'>
                        <Typography variant='h2' component={'h2'} color='white' textAlign='center'  mb={'0.5em'}> How Much Can You Earn With Us</Typography>

                        <Typography variant='p' component='p'  textAlign='center' fontWeight={200}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellat illum aliq</Typography>
                  </Box>

                  <StyledBanner>
                        <InnerStack>
                        <TextField
                              id="standard-textarea"
                             
                              placeholder="Enter your hash rate"
                              multiline
                                    variant="standard"
                                   sx={{width:{xs:'90%',sm:"90%",md:"35%" }, color:'white', borderColor:"white", }}
                              />
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: { xs: '60%', sm: '60%', md: '25%' } }}
                              >
        <InputLabel id="demo-simple-select-standard-label" placeholder='TH/S' >Rate</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
                                          id="demo-simple-select-standard"
                                          sx={{ width: "150%" }}
                                          placeholder="TH/S"
        >
          <MenuItem value={10}>TH/S</MenuItem>
          <MenuItem value={20}>H/S</MenuItem>
          <MenuItem value={30}>KH/S</MenuItem>
          <MenuItem value={30}>MH/S</MenuItem>
          <MenuItem value={30}>GH/S</MenuItem>
        </Select>
                              </FormControl>
                              
      <StyledButton>Calculate</StyledButton>

                        </InnerStack>
                        <Stack  gap={2}>
                              <Typography color={'rgb(54 113 233)'}>ESTIMATED 24 HOUR REVENUE:</Typography>

                              <Stack direction={'row'} gap={1}>

                        

                              <Typography fontWeight={600}>
                                    0.055 130 59 ETH </Typography>
                                    <Typography  fontWeight={600} color={'rgb(54 113 233)'} >($1275)</Typography>
                              </Stack>
                              
                              <Typography >
Revenue will change based on mining difficulty and Ethereum price.</Typography>
                        </Stack>
                  </StyledBanner>
            </Box>
  )
}

export default Header