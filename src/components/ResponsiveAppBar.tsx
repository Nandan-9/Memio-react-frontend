import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Button from '@mui/material/Button';
import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RecoilRoot, useRecoilState } from "recoil"
import SearchModal from './SearchModal';
import { modalState } from '../store/count';



function ResponsiveAppBar({type}:{type:string}) {
  const navigate = useNavigate();
  const handleNavigate =()=>{
      navigate(`/`);
  }
  
  return (
    <RecoilRoot>



    <AppBar   
    
    sx={{
      backgroundColor : "black",
      position : "sticky",
      borderBottom: 1,
      borderColor: 'grey.800' ,

    
    }}
     >
    <Container maxWidth = 'xl'>
    <Toolbar
         
    >
        <Typography
            variant="h6"
            component="a"
            sx={{
                flexGrow : 1,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'Poppins',
              fontSize: '30px',
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              cursor: 'default',
              '&:hover': {
                cursor: 'default'
              },
            }}
            onClick={()=> handleNavigate()}
        >
            Memio
        </Typography>
        <SlideBar type={type}></SlideBar>
        

        



    </Toolbar>
    </Container>
    </AppBar>
    </RecoilRoot>

  );
}



function SlideBar({type}:{type:string}){
  if(type === "slide"){
    return (
      <>
                    <Box 
                sx = {{textTransform : 'none',display: { xs: 'none', md: 'flex' }}}>
                <Button variant="outlined" sx={{textTransform : "none", fontFamily: 'Poppins',fontWeight: 500, color: 'white', }}>Download<ArrowDownwardIcon></ArrowDownwardIcon></Button> 
                </Box>
                <Box 
                sx = {{textTransform : 'none',display: { xs: 'flex', md: 'none' }}}>
                <Button variant="outlined" sx={{mr: 2, textTransform : "none", fontFamily: 'Poppins',fontWeight: 500, color: 'white', }}><ArrowOutwardIcon></ArrowOutwardIcon> </Button>   
                <Button variant="outlined" sx={{mr: 1, textTransform : "none", fontFamily: 'Poppins',fontWeight: 500, color: 'white', }} > <NavigateBeforeIcon> </NavigateBeforeIcon> </Button>
                <Button variant="outlined" sx={{mr:2,textTransform : "none", fontFamily: 'Poppins',fontWeight: 500, color: 'white', }}><NavigateNextIcon></NavigateNextIcon></Button>
                <Button variant="outlined" sx={{textTransform : "none", fontFamily: 'Poppins',fontWeight: 500, color: 'white', }}><ArrowDownwardIcon></ArrowDownwardIcon></Button> 
                </Box>
      </>
     )
  }
  return(
    <>
    <SearchBtn/>
    <SearchModal/>
    
    </>
         

  )

}

function SearchBtn(){

  const [open,setOpen] = useRecoilState(modalState);
  return(
    <>
    <Button
         
         disableElevation	disableFocusRipple disableRipple	
         sx={{
           outline : 'none',
           '&:hover': {
             backgroundColor: "transparent",    
                         
             }
 
         }}
         onClick={()=>{
          setOpen(true);
        }}
         >
         <span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
         </svg>
         </span>
         
         </Button>
    </>
     
  )

}



export default ResponsiveAppBar;


