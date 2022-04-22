import React, {useEffect} from "react";
import {API_KEY, BASE_URL, publicRoutes} from "./routes/routes";
import {Routes, Route} from "react-router";
import {Navbar} from "./Components/header/header";
import {useDispatch} from "react-redux";
import {fetchAllBooks, fetchFrontBooks} from "./store/asyncAction";
import {BookTabs} from "./Components/bookTab/bookTab";

 const App = () => {
const dispatch = useDispatch()

     useEffect(() => {
       dispatch(fetchAllBooks());
       dispatch(fetchFrontBooks())
     },[]);

  return (
    <div>
        <Navbar/>
        <Routes>
        {publicRoutes.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
            />
        ))}
        </Routes>
    </div>
  );
}
 export default App;

