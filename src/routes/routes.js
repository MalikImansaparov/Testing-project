import {HomePage} from "../pages/homePage/homePage";
import { EditBook} from "../pages/editBook/editBook";
import {BookTabs} from "../Components/bookTab/bookTab";
import {AddBook} from "../pages/addBook/addBook";

export const BASE_URL =
  'https://api.itbook.store/1.0/search';

export const publicRoutes = [
  { path: '/book/:isbn13', component: EditBook },
  { path: '/book/add', component: AddBook },
  { path: '/', component: BookTabs },

];


