import * as React  from "react";
import {useEffect} from "react";
import {publicRoutes} from "./routes/routes";
import {Routes, Route} from "react-router";
import { Navbar } from './components/header/header';
import { useDispatch } from 'react-redux';
import { fetchAllBooks, fetchFictionBooks } from './store/asyncAction';


const App = () => {
  const dispatch = useDispatch();
  let localStore: any = localStorage.getItem('persist:root');

  useEffect(() => {
    if (localStore < 230) {
      dispatch(fetchAllBooks());
      dispatch(fetchFictionBooks());
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  );
};
 export default App;

