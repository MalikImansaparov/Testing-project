import {styled, TypographyVariants} from "@mui/material/styles";
import {Item} from "../../theme";
import {Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";

export const BookItem = styled(Item)`
 height: 400px;
 width: 340px;
 border-radius: 20px; 
 padding-right: 10px;           
`
export const GridWrap = styled(Grid)`
 width: 1100px;
 justify-content: center;
 align-items: center;
 margin: 0 auto;
 padding-bottom: 50px;
`
export const BookImg = styled('img')`
 height: 280px;
 width: 230px;
 padding: 0;
 margin-left: 30px;
 cursor: pointer;
`
export const PriceBook = styled(Typography)`
font-size: 20px; 
margin-bottom: 20px;
`
export const BookContent = styled(Box)`
display: block;
margin-left: 10px;
margin-top: 30px;
color: blue;
cursor: pointer;
`
export const BookTitle = styled(Typography)`
font-size: 18px;
font-weight: 600;
color: grey;
padding-top: 12px;
`
export const BookAction = styled(Box)`

display: flex;
position: absolute;
align-items: center;
cursor: pointer;
left: 88%;
top: 0;
`
export const CustomButton = styled(NavLink)`
  height: 36px;
  width: 150px;
  background-color: #2152d2;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  margin-top: 15px;
  margin-left: 580px;
  text-decoration: none;
  padding-top: 5px;
  &:hover {
    background-color: red;
  }
`;

