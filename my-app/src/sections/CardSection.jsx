import btcImg from '../images/btc.png'
import ethImg from '../images/eth.png'
import ltcImg from '../images/ltc.png'

import { Typography, Stack, Box } from '@mui/material'
import Card from '../component/Card';


const CardSection = () => {
      return (

            <Box bgcolor='#f9fafb' padding={'4em 3em'}>
                  
                  <Typography variant='h2' textAlign={'center'} mb={4} component={'h2'}>
                        Trade Securely And Market The High Growth Cryptocurrency
                  </Typography>

                  <Stack direction={'row'} gap={3} justifyContent='center' marginX={'5em'}>
                        <Card img={btcImg} coin="Bitcoin" symbol='BTC' text={'Digital currency in which a record of transactions is maintained.'} />
                        <Card img={ethImg} coin='Ethereum' symbol='ETH'  text={'Blockchain technology to create and run decentralized digital applications.'}/>
                        <Card img={ltcImg } coin='Litecoin' symbol='Ltc' text={'Cryptocurrency that enables instant payments to anyone in the world.'} />

                  </Stack>

            </Box>
            
      )
}

export default CardSection;