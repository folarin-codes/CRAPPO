import { styled} from '@mui/material'

export const StyledButton = styled('button')({
      borderRadius: '4em',
      backgroundColor: "rgb(37 99 235)",
      color: 'white',
      outline: 'none',
      border: "none",
      padding:".7em 1.2em"
     
})

export const SubscribeButton = styled('button')(({theme}) => ({
      borderRadius: '10px',
      backgroundColor: "white",
      color: 'black',
      outline: 'none',
      border: "none",
      height: '3em',
      padding: '.5em 1em',
     
      [theme.breakpoints.down('md')]: {
            
            margin:'0 auto'
      }
}))