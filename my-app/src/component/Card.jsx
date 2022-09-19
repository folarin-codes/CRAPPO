import {useState} from 'react'
import {Box , Stack, Typography, styled} from '@mui/material'

const StyledCard = styled(Box)({
      backgroundColor: "white",
      borderRadius: '15px',
      padding: '5em 1em',
      display: 'flex',
      gap: '1em',
      flexDirection: "column",
      color:"black"
})

const Card = ({ img, coin, text, symbol, onClick, style }) => {
      
    
      
  return (
        <StyledCard onClick={onClick} sx={style}>
              <Box sx={{display:'flex'}}>
                    
              <img src={img} alt='a crypto image' style={{margin:'0 auto'}}/>
                    
              </Box>

              <Stack direction={'row'} gap={0.5} justifyContent='center' >
                    
              <Typography variant='h4'>{ coin }</Typography>
              <Typography variant='h5'>{symbol }</Typography>
                    
              </Stack>

              <Typography sx={{fontWeight:'200', fontSize:"14px"}} textAlign='center'>{text}</Typography>
              
              {/* <button style={{borderRadius:"100%", height:'4em', width:"4em", borderColor:"transparent", outline:'none'}}>hey</button>
               */}
   
        
        </StyledCard>
  )
}

export default Card;