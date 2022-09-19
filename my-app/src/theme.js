
import { createTheme } from "@mui/material";
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
      typography: {
            h3: {
              fontSize: 18,
            },
            h2: {
              fontSize: 'calc(0.5vw + 2em)',
              fontWeight:'400'
             
            },
            h1: {
              fontSize: 'calc(1vw + 2em)',
            },
            p: {
              fontSize: 16,
              fontWeight: 100,
              color:"#9ca3af"
    },
    span: {
              color:'#cb7280'
            }
      },
      
      components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: 'h1',
              h2: 'h2',
              h3: 'h3',
              h4: 'h4',
              h5: 'h5',
              h6: 'h6',
              subtitle1: 'h2',
              subtitle2: 'h2',
              body1: 'span',
              body2: 'span',
              p: 'p',
              span:'span'
            },
          },
          color: {
            other : 'red'
          }
        },
      },
    });
    