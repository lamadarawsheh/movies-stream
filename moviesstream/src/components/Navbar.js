import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h4 className="navbar-header">Discover your favourites .</h4>
            <div className="right-items">
                <SearchBar/>
                <button  className="settings-adjust"><HiOutlineAdjustmentsHorizontal /></button>
            </div>
        </nav>
     );
}
 
export default Navbar;