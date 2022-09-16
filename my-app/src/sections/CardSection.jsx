import btcImg from '../images/btc.png'
import ethImg from '../images/eth.png'
import ltcImg from '../images/ltc.png'

import { Typography, Stack, Box, styled } from '@mui/material'
import Card from '../component/Card';


const StyledComponent = styled(Stack)(({ theme }) => ({
      
      flexDirection: 'row',
      gap: '3em',
      justifyContent: 'center',
      margin : '0 5em',

      [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            margin : '0',
           
      }
}))


const CardSection = () => {
      return (

            <Box bgcolor='#f9fafb' padding={'12em 5vw 4em'} onFocus = {()=>{alert('hello')}}>
                  
                  <Typography variant='h2' textAlign={'center'} mb={4} component={'h2'}>
                        Trade Securely And Market The High Growth Cryptocurrency
                  </Typography>

                  <StyledComponent>
                        <Card img={btcImg} coin="Bitcoin" symbol='BTC' text={'Digital currency in which a record of transactions is maintained.'} />
                        <Card img={ethImg} coin='Ethereum' symbol='ETH'  text={'Blockchain technology to create and run decentralized digital applications.'}/>
                        <Card img={ltcImg } coin='Litecoin' symbol='Ltc' text={'Cryptocurrency that enables instant payments to anyone in the world.'} />

                  </StyledComponent>

            </Box>
            
      )
}

export default CardSection;