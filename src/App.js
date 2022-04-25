import React, {useEffect} from "react";
import {publicRoutes} from "./routes/routes";
import {Routes, Route} from "react-router";
import {Navbar} from "./Components/header/header";
import {useDispatch} from "react-redux";
import {fetchAllBooks, fetchFictionBooks} from "./store/asyncAction";
import {Footer} from "./Components/modules/footer";

 const App = () => {
const dispatch = useDispatch()
     let localStore
     if(localStorage.getItem('persist:root') > 0){
      return localStore = localStorage.getItem('persist:root').length
     }


     useEffect(() => {
         if (localStore <= 305) {
             dispatch(fetchAllBooks());
             dispatch(fetchFictionBooks())
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
        <Footer/>
    </>
  );
}
 export default App;

