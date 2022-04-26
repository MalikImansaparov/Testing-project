import {styled} from "@mui/system";
import {Typography} from "@mui/material";
import { Box } from '@mui/material';
import Button from "@mui/material/Button";

export const InputWrapper = styled('input')`
  width: 500px;
  height: 52px;
  border-radius: 20px;
  border: 1px solid #000000;
  outline: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;

`;


export const LabelWrapper = styled(Typography)`
  margin: 0 0 6px 12px;
  font-size: 12px;
  text-align: left;
  color: #969696;
`;

export const PhotoWrap = styled(Box)`
  width: 210px;
  height: 230px;
`;

export const DefaultPhoto = styled(Box)`
  width: 200px;
  height: 200px;
`;

export const PhotoWrapper = styled('span')`
  width: 250px;
  height: 280px;
  display: block;
  justify-content: center;
  border-radius: 20px;
  padding-top: 10px;
  border: 1px solid #000000;
  font-weight: 600;
  color: #000000;
  cursor: pointer;
  &: hover {
    background: #e6f0e6;
  }
`;

export const CustomButton = styled(Button)`
  height: 52px;
  width: 250px;
  background-color: #2152d2;
  padding: 14px 130px;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  margin-bottom: 70px;
  &:hover {
    background-color: red;
  }
`;

export const InputWrap = styled('input')`
display: none
`


