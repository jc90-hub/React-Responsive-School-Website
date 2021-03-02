import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import{FaSearch} from "@react-icons/all-files/fa/FaSearch";
import{FaAlignJustify} from "@react-icons/all-files/fa/FaAlignJustify";

const Nav = () => {
    return ( 
        <div>
          <nav>
            <div className="logo">
              <a href="#"><img src="assets/logo.jpg" alt="logo"/></a>
            </div>
            <div className="fa-icons" >
              <div>
                <a href="#"><p className="nav-phone-number-display">01782791234</p></a>
                <a href="#"><FaPhoneAlt className="nav-phone-icon-no-display" /></a>
              </div>              
              <a href="#"><FaSearch /></a> 
              <a href="#"><FaAlignJustify /></a>                          
            </div>                   
          </nav>
        </div>
     );
}
 
export default Nav;