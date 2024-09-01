
import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ContentPage from './components/ContentPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/LandingCards';
export const themeOptions: ThemeOptions = {
};
import image from './assets/bg.jpg'
import { Tyest } from './components/Tyest';

import Landingpage from './pages/Landingpage';
import { RecoilRoot } from 'recoil';

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
      <Route path="/tyest" element ={<Tyest></Tyest>}></Route>

      
    </Routes>
      </BrowserRouter>
    </ThemeProvider>



    </>
  )
}

export default App
