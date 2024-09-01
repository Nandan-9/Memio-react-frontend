import { useState } from 'react'
import { Box, Button,  FormControl, InputAdornment, InputLabel,   OutlinedInput } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchState } from '../store/count';
import contentsArray from '../assets/db/db';
import { useNavigate } from 'react-router-dom';

export const SearchBox = () => {

  return (
    <>
    <Box 
    sx={{
      position : 'relative',
      h : "20px",
      w : 10,  
      display : "flex"  ,
      flexDirection : "column"  ,
      justifyContent : "center",
      alignItems : "center"
    }}
    >
      <TextBox/>
      <Box
      style={{wordWrap:'break-word', width:'100%'}}
      sx={{
        
      }}
      >
      <SearhResult/>

      </Box>
    </Box>
    </>
  )
}

function TextBox(){
  const [ value, setValue ] = useRecoilState(searchState);


    const handleCreateNewItem = (e:any) => {
      e.preventDefault();
      setValue(e.target.value.toLowerCase())
      
    };
  return(
    <>
          <FormControl fullWidth sx={{ m: 1 , mb : 2}}
          onChange={handleCreateNewItem}
          
          >
          <InputLabel htmlFor="outlined-adornment-amount"
          >Search</InputLabel>

          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">
                 <span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
         </svg>
         </span>
              </InputAdornment>}
              
            label="search"
          />
        </FormControl>
    </>
  )
}

function SearhResult(){
  const value = useRecoilValue(searchState)
  const navigate = useNavigate();
  const handleNavigate =(id:number)=>{
      navigate(`/content/${id}`);
  }
  const [hover,setHover] = useState<number | null>(null);
  const filteredData  = contentsArray.filter((content)=>{
    if (value === ''){
      return ''
    }else{
      
      const text = content.title.toLowerCase().includes(value.toLowerCase()) ? (content.title.toLowerCase()) : ''
      
      
      return text
    }
  })
  return(
    <>
    
    {filteredData.map((item,index)=>{
      return(
        <Box
        onMouseEnter={()=> setHover(index)}
        onMouseLeave={()=> setHover(null)}
        key={
          index
        }
        sx={{
          bgcolor: hover === index ? "#111821" : "none",
          w : 140,
          borderRadius : 2,
          overflowX: 'hidden',
          display: 'flex',
          justifyContent : "center",
          alignItems : "center"
        }}
        >
  
              <Button variant='text'
              key={index}
              disableElevation	disableFocusRipple disableRipple	
              sx={{
                outline : 'none',
                '&:hover': {
                  backgroundColor: "transparent",    
                              
                  }
      
              }}
              onClick={()=>{handleNavigate(item.c_ID)}}
              >{item.title}</Button>
        </Box>
      )
  
  })}
    
    
    
    </>


  )

}