import { motion } from 'framer-motion';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import SearchBar from "./SearchBar";
const navbarItemVariants = {
    hover: { scale: 1.05, opacity: 0.8 },
    rest: { scale: 1, opacity: 1 },
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 }
  };
const Navbar = () => {
    return ( 
        <motion.nav className="navbar"
            
        >
            <motion.h4 className="navbar-header"
                   initial="hidden"
                   animate="visible"
                   variants={navbarItemVariants}
                   transition={{ type: 'spring', stiffness: 120, damping: 30, delay:.3 }}
            >Discover your favourites .</motion.h4>
            <motion.div className="right-items"        
                whileHover="hover"
                initial="rest"
                variants={navbarItemVariants}>
                <SearchBar/>
                <motion.button  className="settings-adjust"
                     whileHover="hover"
                     initial="rest"
                     variants={navbarItemVariants}
                ><HiOutlineAdjustmentsHorizontal /></motion.button>
            </motion.div>
        </motion.nav>
     );
}
 
export default Navbar;