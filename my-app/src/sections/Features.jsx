import { Typography, Stack, Box, TextField } from "@mui/material";

import feature1 from '../images/feature1.png';

import feature2 from '../images/feature2.png';

import feature3 from '../images/feature3.png';

import newsletterBg from '../images/newsletter-box.png'


import background from '../images/hero-bg.png'

const Features = () => {
      return (
            <Stack sx={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '0 3em' ,padding:"4em 3em"}} gap={'6em'} >
                  
                  <Typography variant="h2" color={'white'}  component={'h2'} textAlign={'center'}>Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice</Typography>

                  <Stack direction='row' gap={'2em'}>
                        
                        <Box flex={1} alignSelf='center'>
                              <Typography variant="h3" mb='0.5em' color={'white'}   component={'h3'}>Invest Smart</Typography>
                              
                              <Typography variant="p"  color={'#9ca3af'} component={'p'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.

                              </Typography>
                              
                        </Box>

                        <Box flex={1} alignSelf='center'>
                              <img src={feature1}  alt='features of the apps'/>
                        </Box>

                  </Stack>

                  <Stack direction='row-reverse' gap={'2em'}>
                        
                        <Box flex={1} alignSelf='center'>
                              <Typography variant="h3" mb='0.5em' color={'white'}  component={'h3'}>Detailed Statistics</Typography>
                              
                              <Typography variant="p"  color={'#9ca3af'} component={'p'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt commodi quos adipisci! Corporis, vero?

learn more

                              </Typography>
                              
                        </Box>

                        <Box flex={1} alignSelf='center'>
                              <img src={feature2} style={{width:'98%'}} alt='features of the apps'/>
                        </Box>
                        
                  </Stack>

                  <Stack direction='row' gap={'2em'}>
                        
                        <Box flex={1} alignSelf='center'>
                              <Typography variant="h3" mb='0.5em' color={'white'}  component={'h3'}>Grow Your Profit And Track Your Investments</Typography>
                              
                              <Typography variant="p"  color={'#9ca3af'} component={'p'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim odit distinctio dolore id incidunt?

                              </Typography>
                              
                        </Box>

                        <Box flex={1} alignSelf='center'>
                              <img src={feature3}  alt='features of the apps'/>
                        </Box>
                        
                  </Stack>

                  <Stack direction='row' justifyContent={'space-around'} sx={{ backgroundImage: `url(${newsletterBg})`, backgroundRepeat: "no-repeat", margin: '0 auto', padding:'4em 1em' , backgroundSize:'cover', borderRadius:'15px' , gap:'7em'}}>
                        <Stack flex={1} gap={2}>
                              <Typography variant='h3' color={'white'}  component={'h3'}>Start Mining Now</Typography>
                              <Typography variant="p"  color={'white'} fontSize={'12px'} fontWeight={200} component={'p'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.</Typography>
                        </Stack>

                        <Box flex={1} >
                        <TextField
                              id="standard-textarea"
                             
                              placeholder="enter message"
                              multiline
                                    variant="standard"
                                   sx={{width:"90%" , color:'white', borderColor:"white"}}
                              />
                        </Box>
                  </Stack>


            </Stack>
            
      )
}

export default Features;