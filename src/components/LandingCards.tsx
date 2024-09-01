import { CardMedia, Card, Grid, Typography, Button, CardContent, Box, Container } from "@mui/material"
import contentsArray, { Contents } from "../assets/db/db"
import ImageIcon from '../assets/assembler.png'
import  { useState } from "react"
import { useNavigate } from "react-router-dom";
import { TextGenerateEffect } from "./TextGenerateEffect";
"use client";

function LandingCards(){

    
const words = `Start your learning..
    `;
    
    return(
        <>
        <Container
        maxWidth={false}
        sx={{
            p : 8,
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            maxWidth : "150rem",


        }}

        >

            <TextGenerateEffect words={words} />;
            <Grid container spacing={10}
            sx={{
                alignItems : "center",
                justifyContent: "center"
            }}
            >
        {contentsArray.map((content,index)=>(
                    <Grid item xs={5} key={index
                    }
                    sx={{
                        mr : 5
                                        }}
                    >
                        <Cards content={content}></Cards>

                    </Grid>

        ))}


        </Grid>

        </Container>
        </>
    )
}


function Cards({content}:{content:Contents}){
    const [hover,setHover] = useState(true)
    const navigate = useNavigate();
    const handleNavigate =(id:number)=>{
        navigate(`/content/${id}`);
    }
    

    return(
        <Card
        onMouseEnter={()=> setHover(false)}
        onMouseLeave={()=> setHover(true)}
        variant="outlined"
        sx={{
            borderColor: hover ? "none" : "#4f4f4f",
            width: 800,
            height: 200,
            display: "flex",
            boxShadow : 4,
            
        }}


    >
        <Media></Media>
        <CardContent>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent : "space-evenly",
                pb : 5,
                position: "relative"
            }}
            >
            <Typography
            variant="h5"
            sx={{
                pb : 2,
                fontFamily : "Poppins",
                fontWeight : 500,
            }}            >
                {content.title}
            </Typography>
            <Typography>
                {content.description}
            </Typography>
            <Button  
            variant="contained"
            sx={{textTransform : 'none',
                "&.MuiButtonBase-root:hover": {
                    bgcolor: "#e6e6e6"
                },
                position : "absolute",
                top : 130,
                width : 30,
                bgcolor :'#ffffff' ,
                ml : 70,
            }}
            onClick={()=> handleNavigate(content.c_ID)}
            >
                view
            </Button>



            </Box>

        </CardContent>
    </Card>

    )
}


function Media(){
    return(
        <> 
        <CardMedia
        component="img"
        image={ImageIcon}
        sx={{
            p : 2,
            width : 100
        }}
        >
            
        </CardMedia>
        </>
    )
}




export default LandingCards;



