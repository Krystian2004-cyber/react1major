import "./Home.css"
import SwitchPages from "../SwitchPages/SwitchPages";
import useGlobalState from "../../context/useGlobalState";
import { useEffect, useState } from "react";
import polonez from '../../assets/polonez.jpg'

function Home () {


    const { state} = useGlobalState();
    return (
        <div className="home-design">
            {
                state?.user == null?
                (<SwitchPages path={"/login"} destiny={"Login"} />):
                (
                    <img src={polonez} className="polonez" alt="Description of the image" />
                )
            }
             
        </div>
       
    )
}

export default Home;