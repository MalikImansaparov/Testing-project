import React, {useEffect} from "react";
import {publicRoutes} from "./routes/routes";
import {Routes, Route} from "react-router";
import {Navbar} from "./Components/header/header";
import {useDispatch} from "react-redux";
import {fetchAllBooks, fetchFrontBooks} from "./store/asyncAction";


 const App = () => {
const dispatch = useDispatch()
     const localStore = localStorage.getItem('persist:root').length

     useEffect(() => {
         if (localStore <= 175) {
             dispatch(fetchAllBooks());
             dispatch(fetchFrontBooks())
         }
     },[])

  return (
    <>
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
    </>
  );
}
 export default App;

