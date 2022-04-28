import * as React from "react";
import {FC, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import {BookAction, BookContent, BookImg, BookItem, BookTitle, GridWrap, PriceBook} from './style';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AbcIcon from '@mui/icons-material/Abc';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import StarIcon from '@mui/icons-material/Star';
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router";
import CircularPreloader from '../../components/modules/preloader';
import {useTypedSelector} from "../../components/hooks/useTypedselector";
import {useAction} from "../../components/hooks/useAction";
import {InputForm} from "../../types";

export const FavoriteList:FC<InputForm> = () => {
    const navigate = useNavigate();
    const bookData = useTypedSelector((state) => state.books.favorite);
    const [sortBook, setSortBook] = useState(bookData);
    const removeFavorite = useAction()

    const sortByTitle = () => {
        setSortBook((data) => {
            const dataToSort = [...data];
            dataToSort.sort((a, b) => (a.title - b.title) ? 1 : -1);
            return dataToSort;
        });
    };

    useEffect(() => {
        const setSortBooks = () => {
            setSortBook(bookData)}
        setSortBooks()
    })

    if (!bookData) {
    return (
      <Box my={5} sx={{ display: 'flex',
          justifyContent: 'center' }} >
          <CircularPreloader />
      </Box>
    );
  }

  return (
    <>
      <BookAction>
        <AbcIcon
          onClick={() => sortByTitle()}
          sx={{ fontSize: '50px', color: 'white', mt: '8px' }}
        />
        <IconButton size="large">
          <Badge
            badgeContent={bookData.length}
            color="error"
            sx={{ mt: '10px' }}
          >
            <LibraryBooksIcon sx={{ color: 'white' }} />
          </Badge>
        </IconButton>
        <IconButton size="large">
          <Badge badgeContent={bookData.length} color="error" sx={{ mt: '13px' }}>
            <StarIcon sx={{ fontSize: '27px', color: 'white' }} />
          </Badge>
        </IconButton>
      </BookAction>
      <GridWrap sx={{ flexGrow: 1 }} container spacing={3}>
        {sortBook.map((book) => {
          return (
            <Grid item xs={4} key={book.id}>
              <BookItem>
                <Box sx={{ display: 'flex' }}>
                  <BookImg src={book.image} alt="book" />
                  <BookContent>
                    <PriceBook>{book.price}$</PriceBook>
                    <ModeEditOutlinedIcon
                      onClick={() => navigate(`/favorite/${book.id}/`)}
                      sx={{ fontSize: '40px', my: '15px' }}
                    />
                    <DeleteOutlinedIcon
                      onClick={() => removeFavorite(book.id)}
                      sx={{ fontSize: '40px' }}
                    />
                  </BookContent>
                </Box>
                <BookTitle>{book.title}</BookTitle>
                <BookTitle sx={{ color: '#2152d2' }}>
                  Author: {book.description.split(',').slice(0, 1)}
                </BookTitle>
              </BookItem>
            </Grid>
          );
        })}
      </GridWrap>
    </>
  );
};
