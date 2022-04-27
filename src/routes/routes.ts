import * as React from "react";
import { EditBook} from "../pages/editBook/editBook";
import { BookTabs } from '../components/bookTab/bookTab';
import { AddBook } from '../pages/addBook/addBook';
import { AddFiction } from '../pages/addBook/addFiction';
import { EditFiction } from '../pages/editBook/editFiction';
import { FavoriteList } from '../pages/favoriteBook/favoriteList';
import { FavoriteBooks } from '../pages/favoriteBook/favoriteBooks';

export const baseURL =
  'https://my-json-server.typicode.com/carlosgustavo/api-react-book-dev-store/products';
export const BASE_URL =
  'https://my-json-server.typicode.com/mark-egemberdiev/restore-server/products';

interface IRouter {
  path: string;
  component: React.FC;
}

export const publicRoutes: IRouter[] = [
  { path: `/book/:id`, component: EditBook },
  { path: '/book/add', component: AddBook },
  { path: `/fiction/:id`, component: EditFiction },
  { path: '/fiction/add', component: AddFiction },
  { path: '/favorite', component: FavoriteList },
  { path: '/fiction', component: FavoriteBooks },
  { path: '/', component: BookTabs },
];


