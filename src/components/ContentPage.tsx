import { Container,  Typography } from "@mui/material"
import CodeBlock from "./CodeBlock";
import ResponsiveAppBar from "./ResponsiveAppBar";
import contentsArray from "../assets/db/db";
import { useParams } from "react-router-dom";
import { HeadingSix, Body, ListBody } from "./Components";

interface CodeBlock {
    type : "code";
    snippet : string;
    language : string;
}

interface TextStyle {
    ml? : number;
    pa?: number;
}

interface HeadingBlock {
  type: "heading";
  text: string;
  style: TextStyle;
}

interface BodyBlock {
  type: "body";
  text: string[];
  style: TextStyle;
}
interface ListBlock {
    type: "list";
    items: string[];
    style: TextStyle;
  }


type ContentBlock = HeadingBlock | BodyBlock | ListBlock | CodeBlock;

interface Contents{
    c_ID : number,
    title : string,
    description : string,
    contentBlocks : ContentBlock[];


}


function renderBlock(block : ContentBlock,index : number){
    switch(block.type){
        case 'heading' :
            return(
                <HeadingSix title={block.text} key={index}></HeadingSix>
            )
        case 'body':
            return(
                <Body body={block.text} style={block.style}></Body>
            )
        case 'list':
            return(
                <ListBody ListItems={block.items} style={block.style}></ListBody>
            )
        case 'code':
            return(
                <CodeBlock code={block.snippet} language={block.language}></CodeBlock>
            )
    }

}

const DataLoader =({ content }: { content: Contents })=>{
    return(
        <>
        <ResponsiveAppBar type="slide"></ResponsiveAppBar>
        <Container maxWidth='md' 
            sx={{
                p : 3,
                ml : { xs: 'none', md: 27 },
                alignItems: 'flex-start',
                flexDirection: 'column',

            }}>
    {content.contentBlocks.map((block,index)=>renderBlock(block,index))}
</Container>
        
        
        </>

    )
}

const ContentPage = () =>{
    const { id } = useParams()
    const idw = 1
    const content = contentsArray.find(contents => contents.c_ID === Number(id))
    console.log(idw)
    if(!content){
        return(
            <Typography
            sx={{
                color: 'white'
            }}
            >
                Not found
            </Typography>
        )
    }
    return <DataLoader content={content}></DataLoader>
}




export default ContentPage