import React from 'react'
import {Box , Stack, Typography, styled} from '@mui/material'

const StyledCard = styled(Box)({
      backgroundColor: "white",
      borderRadius: '15px',
      padding: '5em 1em',
      display: 'flex',
      gap: '1em',
      flexDirection:"column"
})

const Card = ({img ,coin, text, symbol} ) => {
  return (
        <StyledCard>
              <Box sx={{display:'flex'}}>
                    
              <img src={img} alt='a crypto image' style={{margin:'0 auto'}}/>
                    
              </Box>

              <Stack direction={'row'} gap={0.5} justifyContent='center' >
                    
              <Typography variant='h4'>{ coin }</Typography>
              <Typography variant='h5'>{symbol }</Typography>
                    
              </Stack>

            <Typography variant='p' component={'p'} textAlign='center'>{text}</Typography>
              
   
        
        </StyledCard>
  )
}

export default Card;