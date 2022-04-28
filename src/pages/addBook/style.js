import {styled} from "@mui/system";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";

export const PhotoWrapper = styled('span')`
  width: 230px;
  height: 210px;
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
  background-color: blue;
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

export const ValidateMessage = styled(Box)`
text-align: left,
fontSize: 13px,
color: error.main,
margin-top: 12px,
margin-top: 14px
`

export const FormStyle = styled(Box)`
 margin-left: 30px,
 margin-right: 30px,
 display: grid,
 justify-content: center,
`
export const SubmitStyle = styled(Box)`
 display: grid,
 justify-content: center,
`

