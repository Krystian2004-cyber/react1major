import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Favourites from "./Favourites/Favourites";
import Login from "./Login/Login";
import Allitems from "./Allitems/Allitems";
import CarDetails from "./CarDetails/CarDetails";
import useGlobalState from "../context/useGlobalState";


function Body () {
  const { state} = useGlobalState();

    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {state.user?.token && 
        <>
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/allitems" element={<Allitems />} />
        </>
}


      </Routes>
    )
}

export default Body;