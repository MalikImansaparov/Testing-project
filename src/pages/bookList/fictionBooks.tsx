import * as React from "react";
import {FC, useState} from 'react';
import Grid from '@mui/material/Grid';
import {BookAction, BookContent, BookImg, BookItem, BookTitle, GridWrap, PriceBook} from './style';
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
import Checkbox from "@mui/material/Checkbox";
import {NavLink} from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import {InputForm} from "../../components/bookTypes";
import {useTypedSelector} from "../../components/hooks/useTypedselector";
import {useAction} from "../../components/hooks/useAction";

export const FictionBooks: FC<InputForm> = () => {
  const navigate = useNavigate();
  const bookData = useTypedSelector((state) => state.fiction.books);
  const items = useTypedSelector((state) => state.fiction.favorite);
  const [sortBook, setSortBook] = useState(bookData);
  const { setItemInFavorite, removeBook } = useAction();

  const sortByTitle = () => {
    setSortBook((data) => {
      const dataToSort = [...data];
      dataToSort.sort((a, b) => (a.title - b.title ? 1 : -1));
      return dataToSort;
    });
  };

  setTimeout(() => {
    setSortBook(bookData);
  }, 3000);

  return (
    <>
      <BookAction>
        <Tooltip title="Sort Alhabet">
          <AbcIcon
            onClick={() => sortByTitle()}
            sx={{ fontSize: '50px', color: 'white', mt: '8px' }}
          />
        </Tooltip>
        <Tooltip title="Count Books">
          <IconButton size="large">
            <Badge
              badgeContent={bookData.length}
              color="error"
              sx={{ mt: '10px' }}
            >
              <LibraryBooksIcon sx={{ color: 'white' }} />
            </Badge>
          </IconButton>
        </Tooltip>
        <NavLink to="/fiction">
          <Tooltip title="Favorites Books">
            <IconButton size="large">
              <Badge
                badgeContent={items.length}
                color="error"
                sx={{ mt: '13px' }}
              >
                <StarIcon sx={{ fontSize: '27px', color: 'white' }} />
              </Badge>
            </IconButton>
          </Tooltip>
        </NavLink>
      </BookAction>
      <GridWrap sx={{ flexGrow: 1 }} container spacing={3}>
        {sortBook?.map((book) => {
          return (
            <Grid item xs={4} key={book.id}>
              <BookItem>
                <Box sx={{ display: 'flex' }}>
                  <NavLink to={`/fiction/${book.id}`}>
                    <BookImg src={book.image} alt="book" />
                  </NavLink>
                  <BookContent>
                    <PriceBook>{book.price}$</PriceBook>
                    <Box>
                      <Checkbox
                        onClick={() => setItemInFavorite(book)}
                        icon={
                          <StarBorderOutlinedIcon sx={{ fontSize: '40px' }} />
                        }
                        checkedIcon={<StarIcon sx={{ fontSize: '40px' }} />}
                      />
                    </Box>
                    <ModeEditOutlinedIcon
                      onClick={() => navigate(`/fiction/${book.id}/`)}
                      sx={{ fontSize: '40px', my: '15px' }}
                    />
                    <DeleteOutlinedIcon
                      onClick={() => removeBook(book.id)}
                      sx={{ fontSize: '40px' }}
                    />
                  </BookContent>
                </Box>
                <BookTitle>{book.title.split('-').slice(0, 1)}</BookTitle>
                <BookTitle sx={{ color: '#2152d2' }}>
                  {book.description.split('|').slice(0, 1)}
                </BookTitle>
              </BookItem>
            </Grid>
          );
        })}
      </GridWrap>
    </>
  );
};
