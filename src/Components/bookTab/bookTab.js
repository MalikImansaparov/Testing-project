import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from "react";
import {BookList} from "../../pages/bookList/bookList";
import {FrontBooks} from "../../pages/bookList/frontBooks";
import Grid from "@mui/material/Grid";
import {CustomButton} from "../../pages/bookList/style";


export const BookTabs = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography component={'div'}>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"

        >
            <Grid item xs={3} >
                <Box sx={{display:'flex'}}>
    <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                sx={{ my: '25px', fontSize: '20px' }}
            >
                <Tab label="Popular" sx={{mr: '30px', ml: '35px'}}/>
                <Tab label="Frontend" sx={{mr: '30px'}}/>
                <Tab label="Backend" sx={{mr: '30px'}}/>
                <Tab label="Mobile" sx={{mr: '30px'}}/>
                 <Tab label="Author" sx={{mr: '30px'}}/>
                 <CustomButton to='/book/add'>Add book</CustomButton>
            </Tabs>
                </Box>

            <TabPanel value={value} index={0}>
                <BookList/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FrontBooks/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FrontBooks/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FrontBooks/>
            </TabPanel>
                <TabPanel value={value} index={4}>
                    <FrontBooks/>
                </TabPanel>
            </Grid>
        </Grid>
    );
};

