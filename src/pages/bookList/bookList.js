import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {BookContent, BookImg, BookItem, BookTitle, GridWrap, PriceBook} from './style';
import { useSelector, useDispatch } from 'react-redux';
import Typography from "@mui/material/Typography";
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Box from "@mui/material/Box";

export const BookList = () => {
  const bookData = useSelector((state) => state.allBooks.books);

  return (
      <GridWrap sx={{ flexGrow: 1 }} container spacing={3} >
        {bookData.map((book) => {
          return (
                <Grid item xs={3} key={book.title}>
          <BookItem >
                    <Box sx={{display: 'flex'}}>
                        <BookImg src={book.image} alt='book'/>
                        <BookContent>
                            <PriceBook>{book.price}</PriceBook>
                            <StarBorderOutlinedIcon sx={{fontSize:'40px'}}/>
                            <ModeEditOutlinedIcon sx={{fontSize:'40px', my: '10px'}}/>
                            <DeleteOutlinedIcon sx={{fontSize:'40px'}}/>
                        </BookContent>
                    </Box>
              <BookTitle>{book.title}</BookTitle>
          </BookItem>
                </Grid>
          );
        })}
                </GridWrap>
  );
};
