import { List, ListItem, Typography } from "@mui/material"

interface TextStyle {
    ml? : number;
    pa?: number;
}

interface BodyProps {
    body: string[];
    style : TextStyle;
}

interface listProps{
    ListItems : string[];
    style : TextStyle;


}


function HeadingSix({title}:{title:string},key:number){
    return(
        <Typography variant="h4" component="a" color="white"
        key={key}
                sx = {{
                    
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    color: 'white',
                }}
                >
                {title}
                </Typography>
    )
}

function Body({ body,style }: BodyProps){
    return(
        body.map((item,index)=>(
            <Typography variant="body1" 
            color= "white"
            fontFamily= 'poppins'
            sx = {{
                ml : style.ml,
                p : style.pa,
                fontSize : 18                    
            }}
            key={index}
            >
            {item}
            </Typography>

        ))
    )
}

function ListBody({style,ListItems }: listProps){
    return(
        <>
        <List
        sx = {{
            ml : style.ml,
            listStyleType: 'disc',
            fontFamily: 'Poppins',
            color: 'white',
            fontSize : 18
           }}
        >
            {ListItems.map((item,index)=>(
                <ListItem
                sx = {{

                    p : 0,
                    display: 'list-item',
                    }}
                    key={index}
                >
                {item}
                </ListItem>
            ))}
        </List>
        </>
    )
}

export {HeadingSix,ListBody,Body}