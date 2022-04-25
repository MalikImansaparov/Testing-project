import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import {BookAction, BookContent, BookImg, BookItem, BookTitle, GridWrap, PriceBook} from './style';
import { useSelector, useDispatch } from 'react-redux';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AbcIcon from '@mui/icons-material/Abc';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import StarIcon from '@mui/icons-material/Star';
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router";
import {removeBook, setCount, setFavorite} from "../../store/booksSlice/bookSlice";


export const BookList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const bookData = useSelector((state) => state.allBooks.books);
    const countBooks = useSelector((state) => state.allBooks.count);
    const favoriteBooks = useSelector((state) => state.allBooks.favCount);
    const [sortBook, setSortBook] = useState(bookData);


    const sortByTitle = () => {
        setSortBook((data) => {
            const dataToSort = [...data];
            dataToSort.sort((a, b) => (a.title - b.title) ? 1 : -1);
            return dataToSort;
        });
    };

    const favoritesHandler = (id) => {
        dispatch(setFavorite(id))
            favoriteBooks.map((item) =>
                item.id === id ? { ...item, liked: !item.liked } : item
        );
    };

    const setSortBooks = () => {
        setSortBook(bookData)
    }

    useEffect(() => {
        dispatch(setCount())
        dispatch(setFavorite())
        setSortBooks()
    })

    const handleClick = (id) => {
        navigate(`/book/${id}/`)
    }

  return (
      <>
      <BookAction>
          <AbcIcon onClick={() => sortByTitle()}
              sx={{fontSize: '50px', color: 'white', mt:'8px'}}/>
          <IconButton size="large">
              <Badge badgeContent={countBooks} color="error" sx={{mt:'10px'}}>
                  <LibraryBooksIcon sx={{color: 'white'}}/>
              </Badge>
          </IconButton>
          <IconButton size="large" >
              <Badge badgeContent={favoriteBooks} color="error" sx={{mt: '13px'}}>
                  <StarIcon sx={{fontSize: '27px', color: 'white'}} />
              </Badge>
          </IconButton>
      </BookAction>
      <GridWrap sx={{ flexGrow: 1 }} container spacing={3} >
        {sortBook?.map((book, liked) => {
          return (
                <Grid item xs={4} key={book.id}>
          <BookItem >
                    <Box sx={{display: 'flex'}}>
                        <BookImg src={book.image} alt='book'/>
                        <BookContent>
                            <PriceBook>{book.price}$</PriceBook>
                            <span onClick={() => favoritesHandler(book.id)}>
                                {liked ? <StarIcon sx={{fontSize:'40px'}}/> :
                                    <StarBorderOutlinedIcon
                                    sx={{fontSize:'40px'}}/>}
                            </span>
                            <ModeEditOutlinedIcon
                                onClick={() => handleClick(book.id)}
                                sx={{fontSize:'40px', my:'15px'}}/>
                            <DeleteOutlinedIcon
                                onClick={() => dispatch(removeBook(book.id))}
                                sx={{fontSize:'40px'}} />
                        </BookContent>
                    </Box>
              <BookTitle>{book.title}</BookTitle>
              <BookTitle sx={{color:'#2152d2'}}>{book.description}</BookTitle>
          </BookItem>
                </Grid>

          );
        })}

      </GridWrap>
     </>
  );
};
