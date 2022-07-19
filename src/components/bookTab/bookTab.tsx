import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FC, useState } from 'react';
import { BookList } from '../../pages/bookList/bookList';
import Grid from '@mui/material/Grid';
import { FictionBooks } from '../../pages/bookList/fictionBooks';
import { CustomButton } from '../../pages/bookList/style';
import { InputForm } from '../bookTypes';

export const BookTabs: FC<InputForm> = () => {
  const [value, setValue] = useState<number>(0);

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
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

  const handleChange = (event: React.SyntheticEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Box sx={{ display: 'flex' }}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
            sx={{ my: '20px', fontSize: '20px' }}
          >
            <Tab label="Programming" sx={{ mr: '30px', ml: '35px' }} />
            <Tab label="Fiction" sx={{ mr: '30px' }} />
            <CustomButton to="/book/add">Add book</CustomButton>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <BookList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FictionBooks />
        </TabPanel>
      </Grid>
    </Grid>
  );
};
