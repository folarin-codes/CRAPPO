import { Typography, Stack, Box, TextField, styled } from "@mui/material";

import feature1 from '../images/feature1.png';

import feature2 from '../images/feature2.png';

import feature3 from '../images/feature3.png';

import newsletterBg from '../images/newsletter-box.png'

import { StyledButton , SubscribeButton } from "../component/Button";

import background from '../images/hero-bg.png'


const StyledComponent = styled(Stack)(({ theme }) => ({
      
      flexDirection: 'row',
      gap: '2em',
      
      
      [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
      }
}))

const StyledBanner = styled(Stack)(({ theme }) => ({
      flexDirection: 'row',
      justifyContent:'space-around', backgroundImage: `url(${newsletterBg})`, backgroundRepeat: "no-repeat", margin: '0 auto', padding:'4em 1em' , backgroundSize:'cover', borderRadius:'15px' , gap:'7em',
      
      [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap:'2em'
          
           
      }
  
}));

const InputContainer = styled(Stack)(({ theme }) => ({

      flex: 1,
      flexDirection: 'row',
      gap: '2em',
      justifyItems: "center",
      alignItems:"center",
      [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap:'2em'
          
           
      }

      
}))

const Features = () => {
      return (
            <Stack sx={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '0 3em' ,padding:"4em 5vw"}} gap={'6em'} >
                  
                  <Typography variant="h2" color={'white'}  component={'h2'} textAlign={'center'}>Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice</Typography>

                  <StyledComponent>
                        
                        <Box  flex={1} alignSelf='center'>
                              <Typography variant="h3" mb='1em' color={'white'}   component={'h3'}>Invest Smart</Typography>
                              
                              <Typography variant="p" mb='1em' color={'#9ca3af'} component={'p'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.

                              </Typography>

                              <StyledButton>learn more</StyledButton>
                              
                        </Box>

                        <Box flex={1} alignSelf='center'>
                              <img src={feature1} style={{ width: '98%' }} alt='features of the apps'/>
                        </Box>

                  </StyledComponent>

                  <StyledComponent>
                        
                        <Box  sx={{order:{sm:1, md:2}}} flex={1} alignSelf='center'>
                              <Typography variant="h3" mb='1em' color={'white'}  component={'h3'}>Detailed Statistics</Typography>
                              
                              <Typography variant="p"  mb="1em" color={'#9ca3af'} component={'p'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt commodi quos adipisci! Corporis, vero?

learn more

                              </Typography>

                              
                              <StyledButton>learn more</StyledButton>
                              
                        </Box>

                        <Box flex={1} order={1} alignSelf='center'>
                              <img src={feature2} style={{width:'98%'}} alt='features of the apps'/>
                        </Box>
                        
                  </StyledComponent>

                  <StyledComponent>
                        
                        <Box flex={1} alignSelf='center'>
                              <Typography variant="h3" mb='1em' color={'white'}  component={'h3'}>Grow Your Profit And Track Your Investments</Typography>
                              
                              <Typography variant="p" mb='1em'  color={'#9ca3af'} component={'p'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim odit distinctio dolore id incidunt?

                              </Typography>

                              
                              <StyledButton>learn more</StyledButton>
                              
                        </Box>

                        <Box flex={1} alignSelf='center'>
                              <img src={feature3} style={{ width: '100%' }}  alt='features of the apps'/>
                        </Box>
                        
                  </StyledComponent>

                  <StyledBanner>
                        <Stack flex={1} gap={2}>
                              <Typography variant='h3' color={'white'}  component={'h3'}>Start Mining Now</Typography>
                              <Typography variant="p"  color={'white'} fontSize={'12px'} fontWeight={200} component={'p'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.</Typography>
                        </Stack>

                        <InputContainer >
                              
                        {/* <TextField
                                    id="standard-textarea"
                                    sx={{width:"100%" , color:'red', borderColor:"white"}}
                             
                              placeholder="enter message"
                              multiline
                                    variant="standard"
                                  
                              /> */}

                              <input type={'text'} style={{
                                    backgroundColor: "transparent", border:"none",outline:"none",  color:"white", borderBottom:'1px solid white', paddingBottom:'1em',width:"100%" }} placeholder="enter message"  />

                              
                        <SubscribeButton> Subscribe</SubscribeButton>
                        </InputContainer>
                  </StyledBanner>


            </Stack>
            
      )
}

export default Features;