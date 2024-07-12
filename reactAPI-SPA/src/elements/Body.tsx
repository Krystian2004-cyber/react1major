import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Favourites from "./Favourites/Favourites";
import Login from "./Login/Login";
import Allitems from "./Allitems/Allitems";
import CarDetails from "./CarDetails/CarDetails";

function Body () {

    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allitems" element={<Allitems />} />
        <Route path="/cardetails" element={<CarDetails />} />

      </Routes>
    )
}

export default Body;