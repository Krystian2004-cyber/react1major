import useGlobalState from "../../context/useGlobalState";
import { useEffect } from "react";

function CarDetails () {

    const { state } = useGlobalState();


    useEffect(() =>{
        console.log(state.car)
      },[state])

    return (
        <div className="car-design">
            cardetails
        </div>
    )
}

export default CarDetails;