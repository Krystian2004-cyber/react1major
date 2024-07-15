import { useEffect, useState } from "react";
import "./Allitems.css"
import { useNavigate } from "react-router-dom";
import useGlobalState from "../../context/useGlobalState";
import { getDefaultCars } from "../api/requests";
import { Car } from "../../interfaces/interfaces";
import { getImages } from "../api/requests";


function Allitems () {

    const navigate = useNavigate();
    const { state, setState } = useGlobalState();
    const [carArr, setCarArr] = useState<Car[]>([]);
    


    useEffect(() =>{

      const fetchCarsAndImages = async () => {
        try {
          let res: Car[] = await getDefaultCars();
          //console.log(res);
          setCarArr(res);
          const updatedCarArr = await Promise.all(
            res.map(async car => {
              let img: string = await getImages(car.make, car.model);
              //console.log(img, "image");
              return { ...car, image: img };
            })
          );
          setCarArr(updatedCarArr);
        } catch (error) {
          console.error("Error fetching cars or images", error);
        }
      };
  
      fetchCarsAndImages();

    },[])


    useEffect(() =>{
      //console.log(carArr);
    },[carArr])
    
    const selectCar = (luxurycar: Car) => {
      //console.log(luxurycar)
      setState(prevState => ({
        ...prevState,
        car: luxurycar,
      }));
      navigate('/cardetails');
      //console.log(state.car)
    };

    
    
    useEffect(() => {
        if (state.user?.token == undefined) {
          navigate('/');
        }
      }, [state.user?.token, navigate]);

    return (
     
        
        <div className="allitems-design">
    {carArr.map((car, index) => (
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

export default Allitems;