import "./SwitchPages.css"
import { useNavigate } from "react-router-dom";
import { Switcher } from "../../interfaces/interfaces";

const SwitchPages: React.FC<Switcher> = ({path,destiny}) => {

    const navigate = useNavigate();
    return (
        <>
        <button className="button-64" role="button" onClick={() => navigate(path)}><span className="text">{destiny}</span>
        </button>
       </>


    )
}

export default SwitchPages;