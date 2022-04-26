import React, {useEffect} from "react";
import {publicRoutes} from "./routes/routes";
import {Routes, Route} from "react-router";
import {Navbar} from "./Components/header/header";
import {useDispatch} from "react-redux";
import {fetchAllBooks, fetchFictionBooks} from "./store/asyncAction";
import {Footer} from "./Components/modules/footer";
import {clearBooks} from "./store/booksSlice/bookSlice";

 const App = () => {
const dispatch = useDispatch()
     // let localStore
     //
     // useEffect(() => {
     //     if (localStorage.getItem('persist:root') === null ) {
     //         dispatch(fetchAllBooks());
     //         dispatch(fetchFictionBooks())
     //     }
     // },[])

     useEffect(() => {
             dispatch(fetchAllBooks());
         dispatch(fetchFictionBooks());
     },[])


     // setTimeout(function(){
     //      localStore = localStorage.getItem('persist:root').length
     // }, 5000)
     //
     // const updateDate = () => {
     //     if (localStore <= 300 ) {
     //         dispatch(fetchAllBooks());
     //         dispatch(fetchFictionBooks())
     //     }
     // }
     //
     // setTimeout(updateDate, 10000)




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

