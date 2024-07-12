import "./Header.css"
import SwitchPages from "../SwitchPages/SwitchPages";
import useGlobalState from "../../context/useGlobalState";

function Header () {
    const { state} = useGlobalState();
    return (
                state?.user != null?
                ( <div className="header-design"><SwitchPages path={"/allitems"} destiny={"allitems"} />
                 <SwitchPages path={"/favourites"} destiny={"favourites"} /> </div>
                ):(<div className="header-design"></div>) 
    )
}

export default Header;