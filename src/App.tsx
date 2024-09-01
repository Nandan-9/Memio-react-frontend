
import './App.css'
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ContentPage from './components/ContentPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export const themeOptions: ThemeOptions = {
};

import Landingpage from './pages/Landingpage';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      dark: '#070a0e',
      light : '#383338',
    },
    secondary: {
      main: '#f50057',
      light : "#a7a6ab"

    },
    background: {
      default: '#070a0e',
      paper: '#070a0e',
    },
  },
  typography :{
    fontFamily: 'Poppins',
    fontWeightLight : 300,
    fontWeightRegular : 400,
    fontWeightMedium : 500,
    fontWeightBold : 700
  },
  components : {
    MuiAppBar:{
      styleOverrides:{
        root : {
          margin : 0,
          left : 0,
          right : 0
        }
      }
    }
  }

})

function App() {

  return (
    <>



    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element ={<Landingpage/> }></Route>
      <Route path="/content/:id" element ={<ContentPage></ContentPage>}></Route>

      
    </Routes>
      </BrowserRouter>
    </ThemeProvider>



    </>
  )
}

export default App
