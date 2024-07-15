import useGlobalState from "../../context/useGlobalState";
import { useEffect, useState } from "react";
import './CarDetails.css'
import { Car } from "../../interfaces/interfaces";

function CarDetails () {

    const { state,  setState } = useGlobalState();
    const [fav, setFav] = useState<boolean>(false);



    useEffect(() =>{
        console.log(state.car);
        if(state.car?.id && state.favourites.some(favCar => favCar.id === state.car?.id))
        {
            console.log('faworyci zawieraja ten samochod');
            setFav(true);
        }
        else
        {
            setFav(false);
        }
      },[state])


      function addToFavourites(fav:Car | null)
    {
        if (fav === null) {
            console.log('No car to add');
            return;
          }

        console.log(fav)


        const isDuplicate = state.favourites.some(car => car.id === fav.id);

        if (isDuplicate) {
            console.log('duplicate found');
            return state;
        }
        else
        {
             setState(prevState => ({
            ...prevState,
            favourites: [...prevState.favourites, fav],
          }));
        }   
    }

    function removeFromFavourites(fav:Car | null)
    {
        if (fav === null) {
            console.log('No car');
            return;
          }

        console.log(fav)
        setState(prevState => ({
            ...prevState,
            favourites: prevState.favourites.filter(favCar => favCar.id !== fav.id)
        }));
    
    }


    return (
        <div className="car-details">
        <div className="car-image">
            <img src={state.car?.image} alt={`${state.car?.make} ${state.car?.model}`} />
        </div>
        <div className="car-info">
            <h2>{state.car?.year} {state.car?.make} {state.car?.model}</h2>
            <div className="car-specs">
                <p><strong>Color:</strong> {state.car?.color}</p>
                <p><strong>Mileage:</strong> {state.car?.mileage} miles</p>
                <p><strong>Price:</strong> ${state.car?.price.toLocaleString()}</p>
                <p><strong>Fuel Type:</strong> {state.car?.fuelType}</p>
                <p><strong>Transmission:</strong> {state.car?.transmission}</p>
                <p><strong>Engine:</strong> {state.car?.engine}</p>
                <p><strong>Horsepower:</strong> {state.car?.horsepower} hp</p>
            </div>
            <div className="button-container">
                {!fav ? (
                    <button onClick={() => addToFavourites(state.car)}>Add to favourites</button>
                ) : (
                    <button onClick={() => removeFromFavourites(state.car)}>Remove from favourites</button>
                )}
            </div>
        </div>
    </div>
    
    )
}

export default CarDetails;