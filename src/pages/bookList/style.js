import {styled, TypographyVariants} from "@mui/material/styles";
import {Item} from "../../theme";
import {Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";

export const BookItem = styled(Item)`
 height: 360px;
 width: 310px;
 border-radius: 20px; 
 padding-right: 30px;           
`
export const GridWrap = styled(Grid)`
 width: 1300px;
 justify-content: center;
 align-items: center;
 margin: 0 auto;
`
export const BookImg = styled('img')`
 height: 280px;
 width: 240px;
 padding: 0;
 margin: 0;
`
export const PriceBook = styled(Typography)`
font-size: 20px; 
margin-bottom: 20px;
`
export const BookContent = styled(Box)`
margin-top: 30px;
color: blue;
`
export const BookTitle = styled(Typography)`
font-size: 18px;
font-weight: 600;
color: blue;
padding-left: 10px;
`

