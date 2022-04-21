import {HomePage} from "../pages/homePage/homePage";
import {BookInfo} from "../pages/bookInfo/bookInfo";
import {Navbar} from "../Components/header/header";

export const BASE_URL =
  'https://api.itbook.store/1.0/search';

export const publicRoutes = [
  { path: `/book/:id`, component: BookInfo },
  { path: '*', component: HomePage },

];


