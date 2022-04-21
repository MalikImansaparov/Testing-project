import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {BookContent, BookImg, BookItem, GridWrap} from './style';
import { useSelector, useDispatch } from 'react-redux';
import Typography from "@mui/material/Typography";
import {fetchAllBooks, fetchFrontBooks} from "../../store/asyncAction";

export const FrontBooks = () => {
  const bookData = useSelector((state) => state.frontBooks.books);
    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch(fetchFrontBooks());
    // },[]);

  return (
      <GridWrap sx={{ flexGrow: 1 }} container spacing={3} >
        {bookData.map((book) => {
          return (
                <Grid item xs={3} key={book.title}>
                <BookItem >
                         <BookImg src={book.image} alt='book'/>
                    <BookContent>
                         <Typography>{book.price}</Typography>
                     </BookContent>
                </BookItem>
                </Grid>
          );
        })}
                </GridWrap>
  );
};
