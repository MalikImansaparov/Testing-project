import {styled} from "@mui/system";
import {Typography} from "@mui/material";
import { Box } from '@mui/material';

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

export const ScheduleWrapper = styled('input')`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #000000;
  outline: none;
  margin: 20px;
  padding: 15px 18.5px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`;

export const SelectWrapper = styled('select')`
  width: 500px;
  height: 52px;
  border-radius: 20px;
  border: 1px solid #000000;
  outline: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #969696;
  background: transparent
    url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png')
    no-repeat 95% center;
`;

export const LabelWrapper = styled(Typography)`
  margin: 0 0 6px 12px;
  font-size: 12px;
  text-align: left;
  color: #969696;
`;

export const PhotoWrap = styled(Box)`
  width: 200px;
  height: 160px;
`;

export const DefaultPhoto = styled(Box)`
  width: 180px;
  height: 150px;
`;

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

export const TextareaWrapper = styled('textarea')`
  font-family: 'Montserrat';
  width: 500px;
  height: 180px;
  border-radius: 20px;
  border: 1px solid #000000;
  outline: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`;

export const InputWrap = styled('input')`
display: none
`

