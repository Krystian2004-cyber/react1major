import "./Favourites.css"
import { useNavigate } from "react-router-dom";
import useGlobalState from "../../context/useGlobalState";
import { useEffect } from "react";
import { Car } from "../../interfaces/interfaces";


function Favourites () {

    const navigate = useNavigate();
    const { state, setState } = useGlobalState();
    
    useEffect(() => {
        if (state.user?.token == undefined) {
          navigate('/');
        }
      }, [state.user?.token, navigate]);


  

       
    const selectCar = (luxurycar: Car) => {
      //console.log(luxurycar)
      setState(prevState => ({
        ...prevState,
        car: luxurycar,
      }));
      navigate('/cardetails');
    }
      
    return (
      <div className="favourites-design">
      {state.favourites.map((car, index) => (
          <div
              key={index}
              id={car.id.toString()}
              className="card"
              onClick={() => selectCar(car)}
              style={{ backgroundImage: `url(${car.image})` }}
          >
              <div className="card-content">
                  <h3 className="car-title">{`${car.make} ${car.model}`}</h3>
                  <p className="car-year">{car.year}</p>
              </div>
          </div>
      ))}
  </div>
    )
}

export default Favourites;