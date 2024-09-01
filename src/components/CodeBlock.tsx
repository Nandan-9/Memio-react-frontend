import { Box, Button, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface CodeBlk {
  language : string;
  code : string;

}




function CodeBlock({language,code}:CodeBlk){
  return (
    <>
    <Box 
    sx={{
        width : 600,
        height : 'auto',
         alignContent: 'flex-start',
         position : 'relative',
         borderRadius : 2,
         overflow : "hidden"
    }}
    >
    <Box
    sx={{
      width : 600,
      height : 25,
      top: 0,
      position : 'absolute',
      backgroundColor : 'primary.light',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between',
    }}
    >
    <Typography
    sx={{
      mt : .5,
      ml : 1,
      fontSize : 13,
      color : 'secondary.light',
      fontWeight : 500,
    }}
    >example</Typography>
    <Button
    sx={{
      textTransform : 'none',
      fontSize : '12px',

    }}
    ><ContentCopyIcon 
    fontSize = 'inherit'
    sx = {{
    color : 'secondary.light'

    }}
    ></ContentCopyIcon>
    <Typography
    sx={{
      p : 0.5,
      fontSize : 13,
      color : 'secondary.light',
      fontWeight : 500,
    }}
    >copy</Typography>
    </Button>
    </Box>
    <SyntaxHighlighter language= {language} style={dracula}>
      {code}
    </SyntaxHighlighter>

    </Box>

    </>

  );
};

export default CodeBlock