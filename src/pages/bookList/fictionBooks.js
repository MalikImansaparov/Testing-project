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
import {removeBook, setItemInFavorite} from "../../store/booksSlice/fictionSlice";
import Checkbox from "@mui/material/Checkbox";
import {NavLink} from "react-router-dom";

export const FictionBooks = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const bookData = useSelector((state) => state.fiction.books);
    const [sortBook, setSortBook] = useState(bookData);
    const items = useSelector((state) => state.fiction.favorite);

    const favoriteHandler = (book) => {
        dispatch(setItemInFavorite(book));
    };

    const sortByTitle = () => {
        setSortBook((data) => {
            const dataToSort = [...data];
            dataToSort.sort((a, b) => (a.title - b.title) ? 1 : -1);
            return dataToSort;
        });
    };

    const setSortBooks = () => {
        setSortBook(bookData)
    }

    useEffect(() => {
        setSortBooks()
    },[])

    const handleClick = (id) => {
        navigate(`/fiction/${id}/`)
    }

    return (
        <>
            <BookAction>
                <AbcIcon onClick={() => sortByTitle()}
                         sx={{fontSize: '50px', color: 'white', mt:'8px'}}/>
                <IconButton size="large">
                    <Badge badgeContent={bookData.length} color="error" sx={{mt:'10px'}}>
                        <LibraryBooksIcon sx={{color: 'white'}}/>
                    </Badge>
                </IconButton>
                <NavLink to='/fiction'>
                <IconButton size="large" >
                    <Badge badgeContent={items.length} color="error" sx={{mt: '13px'}}>
                        <StarIcon sx={{fontSize: '27px', color: 'white'}} />
                    </Badge>
                </IconButton>
                </NavLink>
            </BookAction>
            <GridWrap sx={{ flexGrow: 1 }} container spacing={3} >
                {sortBook?.map((book) => {
                    return (
                        <Grid item xs={4} key={book.id}>
                            <BookItem >
                                <Box sx={{display: 'flex'}}>
                                    <BookImg src={book.image} alt='book'/>
                                    <BookContent>
                                        <PriceBook>{book.price}$</PriceBook>
                                        <Box>
                                        <Checkbox onClick={() => favoriteHandler(book)}
                                                  icon={<StarBorderOutlinedIcon sx={{fontSize:'40px'}}/>}
                                                  checkedIcon={<StarIcon sx={{fontSize:'40px'}}
                                                  />}  />
                                        </Box>
                                        <ModeEditOutlinedIcon
                                            onClick={() => handleClick(book.id)}
                                            sx={{fontSize:'40px', my:'15px'}}/>
                                        <DeleteOutlinedIcon
                                            onClick={() => dispatch(removeBook(book.id))}
                                            sx={{fontSize:'40px'}} />
                                    </BookContent>
                                </Box>
                                <BookTitle>{book.title.split('-').slice(0, 1)}</BookTitle>
                                <BookTitle sx={{color:'#2152d2'}}>{book.description.split('|').slice(0, 1)}</BookTitle>
                            </BookItem>
                        </Grid>

                    );
                })}

            </GridWrap>
        </>
    );
};
