import "./Favourites.css"
import { useNavigate } from "react-router-dom";
import useGlobalState from "../../context/useGlobalState";
import { useEffect } from "react";


function Favourites () {

    const navigate = useNavigate();
    const { state } = useGlobalState();
    
    useEffect(() => {
        if (state.user?.token == undefined) {
          navigate('/');
        }
      }, [state.user?.token, navigate]);
      
    return (
        <div className="favourites-design">
            favourites
        </div>
    )
}

export default Favourites;