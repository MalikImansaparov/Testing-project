import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { red } from '@mui/material/colors';
import { createTheme} from '@mui/material/styles';

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    borderRadius: '20px',
    paddingTop: '20px'
}));

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1512,
        },
    },
    Typography: {
        fontFamily: [
            'Montserrat'
        ],
        color: {
            main: '#000000'
        }
    },
    palette: {
        primary: {
            main: '#2152d2',
        },
        grey: {
            main: '#E1E1E1;',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#F8F3EC',
        },
        hover: {
            background: "#E6F0E6;"
        },
        placeholder: {
            default: '#487349;'
        }
    },

});

export default theme;



