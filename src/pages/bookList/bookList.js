import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {BookAction, BookContent, BookImg, BookItem, BookTitle, GridWrap, PriceBook} from './style';
import { useSelector, useDispatch } from 'react-redux';
import Typography from "@mui/material/Typography";
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AbcIcon from '@mui/icons-material/Abc';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router";
import {removeBook} from "../../store/booksSlice/bookSlice";


export const BookList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const bookSelector = useSelector((state) => state.allBooks.books);
  const bookData = Array.from(bookSelector)
    const handleClick = () => {

    }
  return (
      <>
      <BookAction>
          <AbcIcon sx={{fontSize: '50px', color: 'white', mt:'8px'}}/>
          <IconButton size="large">
              <Badge badgeContent={4} color="error" sx={{mt:'10px'}}>
                  <LibraryBooksIcon sx={{color: 'white'}}/>
              </Badge>
          </IconButton>
          <IconButton size="large" >
              <Badge badgeContent={4} color="error" sx={{mt: '13px'}}>
                  <StarIcon sx={{fontSize: '27px', color: 'white'}} />
              </Badge>
          </IconButton>
      </BookAction>
      <GridWrap sx={{ flexGrow: 1 }} container spacing={3} >
        {bookData.map((book) => {
          return (
                <Grid item xs={3} key={book.id}>
          <BookItem >
                    <Box sx={{display: 'flex'}}>
                        <BookImg src={book.image} alt='book'/>
                        <BookContent>
                            <PriceBook>{book.price}</PriceBook>
                            <StarBorderOutlinedIcon sx={{fontSize:'40px'}}/>
                            <ModeEditOutlinedIcon onClick={() => navigate(`/book/${book.id}`)} sx={{fontSize:'40px', my:'10px'}}/>
                            <DeleteOutlinedIcon onClick={() => dispatch(removeBook(book.id))} sx={{fontSize:'40px'}} />
                        </BookContent>
                    </Box>
              <BookTitle>{book.title}</BookTitle>
          </BookItem>
                </Grid>
          );
        })}
      </GridWrap>
     </>
  );
};
