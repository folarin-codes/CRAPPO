import Header from "./sections/Header"
import CardSection from "./sections/CardSection"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import { Box } from "@mui/system"

import { ThemeProvider } from "@mui/material"
import { theme } from './theme'
import { MobileNav } from "./sections/Navigation"

const App = () => {
  return (
    <ThemeProvider theme={theme}>

   

      <Box>
        <MobileNav/>
        
      <Header />
      <CardSection />
      <Features />
      <Footer/>
      </Box>

      </ThemeProvider>


    
  )
}

export default App