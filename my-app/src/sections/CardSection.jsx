import { useState , useReducer} from 'react'; 

import { Typography, Stack, Box, styled } from '@mui/material'

import Card from '../component/Card';

import btcImg from '../images/btc.png'
import ethImg from '../images/eth.png'
import ltcImg from '../images/ltc.png'




const StyledComponent = styled(Stack)(({ theme }) => ({
      
      flexDirection: 'row',
      gap: '3em',
      justifyContent: 'center',
      // margin : '0 5em',

      [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            margin : '0',
           
      }
}))

const styles = {
      backgroundColor:"#2B076E",
      color: "white",
      transition:'all 1s ease'
      
}

const INITIAL_STATE = {

      focus1: true,
      focus2: false,
      focus3: false
}

const INITIAL_CARD_ACTION = {
      SET_CARD1_FOCUS: ' SET_CARD1_FOCUS',
      SET_CARD2_FOCUS: ' SET_CARD2_FOCUS',
      SET_CARD3_FOCUS : ' SET_CARD3_FOCUS'
}

const focusReducer = (state, action) => {

      const { type, payload } = action
      
      switch (type) {
            case INITIAL_CARD_ACTION.SET_CARD1_FOCUS: return {
                  ...state,
                  focus1: payload,
                  focus2: false,
                  focus3: false
                  
            }
            case INITIAL_CARD_ACTION.SET_CARD2_FOCUS: return {
                  ...state,
                  focus2: payload,
                  focus1: false,
                  focus3: false
                  
            }
            case INITIAL_CARD_ACTION.SET_CARD3_FOCUS: return {
                  ...state,
                  focus3: payload,
                  focus2: false,
                  focus1: false

            }
            default:
                  throw new Error(`There was an unhandled type ${type} from the focuse Reducer`)
      }
      
      
}



const CardSection = () => {

      // const [focus1, setFocus1] = useState(true)
      // const [focus2, setFocus2] = useState(false)
      // const [focus3, setFocus3] = useState(false)
      
      // const onClickHandler1 = () => {
      //       setFocus1(true)
      //       setFocus2(false)
      //       setFocus3(false)
      // }
      // const onClickHandler2 = () => {
      //       setFocus1(false)
      //       setFocus2(true)
      //       setFocus3(false)
      // }
      // const onClickHandler3 = () => {
      //       setFocus1(false)
      //       setFocus2(false)
      //       setFocus3(true)
      // }

      const [{ focus1, focus2, focus3 }, dispatch] = useReducer(focusReducer, INITIAL_STATE)
      
      const onCard1Click = () => {

            dispatch({type:INITIAL_CARD_ACTION.SET_CARD1_FOCUS, payload: true} )
            
      }
      const onCard2Click = () => {
            
            dispatch({type:INITIAL_CARD_ACTION.SET_CARD2_FOCUS, payload:  true} )
            
      }
      const onCard3Click = () => {
            
            dispatch({type:INITIAL_CARD_ACTION.SET_CARD3_FOCUS, payload:  true} )
            
      }
      
      

      return (

            <Box bgcolor='#f9fafb' padding={'12em 5vw 4em'} >
                  
                  <Typography variant='h2' textAlign={'center'} mb={4} component={'h2'}>
                        Trade Securely And Market The High Growth Cryptocurrency
                  </Typography>

                  <StyledComponent>
                        
                        <Card img={btcImg} coin="Bitcoin" symbol='BTC' text={'Digital currency in which a record of transactions is maintained.'}  onClick={onCard1Click} style={ focus1 && styles}  />

                        <Card img={ethImg} coin='Ethereum' symbol='ETH' text={'Blockchain technology to create and run decentralized digital applications.'}  onClick={onCard2Click} style={ focus2 && styles} />
                        
                        <Card img={ltcImg } coin='Litecoin' symbol='Ltc' text={'Cryptocurrency that enables instant payments to anyone in the world.'}  onClick={onCard3Click} style={ focus3 && styles}/>

                  </StyledComponent>

            </Box>
            
      )
}

export default CardSection;