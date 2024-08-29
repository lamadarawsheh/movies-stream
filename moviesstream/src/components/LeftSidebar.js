import { motion } from 'framer-motion';
import { FaPlus } from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
import { RiSettings2Line } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { FaToggleOff } from "react-icons/fa6";
import { ProfileImg ,UserImg} from "../assets";

const LeftSidebar = ({Profile,Users}) => {
    return (
        <motion.div className ="left-sidebar"
            initial={{ x: '-100%' ,opacity:0}} 
            animate={{ x: 0 ,opacity:1}} 
            transition={{ type: 'spring', stiffness: 120, damping: 30, delay:.3 }}
            
        >
            <div className="profile-section">
                    <motion.button  className='profile-section-button-img'
                       whileHover={{ scale: 1.05, opacity: 0.8 }}
                       initial={{ scale: 1, opacity: 1 }}
                    ><img src={ProfileImg}alt=''></img></motion.button>
                    <motion.button className="icon-button"
                       whileHover={{ scale: 1.05, opacity: 0.8 }}
                       initial={{ scale: 1, opacity: 1 }}
                    >
                        <LuLayoutGrid className="Profile-section-icons" />
                    </motion.button>
                    <motion.button className="icon-button"
                           whileHover={{ scale: 1.05, opacity: 0.8 }}
                           initial={{ scale: 1, opacity: 1 }}
                    >
                        <MdOutlineExplore className="Profile-section-icons" />
                    </motion.button>
                    <motion.button className="icon-button"
                       whileHover={{ scale: 1.05, opacity: 0.8 }}
                       initial={{ scale: 1, opacity: 1 }}
                    >
                        <CiBookmark className="Profile-section-icons" />
                    </motion.button>
                    <motion.button className="icon-button"
                       whileHover={{ scale: 1.05, opacity: 0.8 }}
                       initial={{ scale: 1, opacity: 1 }}
                    >
                        <IoIosNotificationsOutline className="Profile-section-icons" />
                    </motion.button>
                    <motion.button className="icon-button"
                       whileHover={{ scale: 1.05, opacity: 0.8 }}
                       initial={{ scale: 1, opacity: 1 }}
                    >
                        <CiPlay1 className="Profile-section-icons" />
                    </motion.button>
                    <motion.button className="icon-button"
                       whileHover={{ scale: 1.05, opacity: 0.8 }}
                       initial={{ scale: 1, opacity: 1 }}
                    >
                        <RiSettings2Line className="Profile-section-icons" />
                    </motion.button>



                    
            </div>
            <div className="users-list">
                    {Users.map((user)=>(
                            <motion.button className="user-button" key={user.id}
                            whileHover={{ scale: 1.05, opacity: 0.8 }}
                            initial={{ scale: 1, opacity: 1 }}>
                                <img src={UserImg}alt=''></img></motion.button>
                        
                        ))}
        
                    <motion.button className='add-user-button'
                       whileHover={{ scale: 1.05, opacity: 0.8 }}
                       initial={{ scale: 1, opacity: 1 }}
                    ><FaPlus /></motion.button>
            </div>
            <div className="left-sidebar-footer">
                 <motion.button className='Toggle-button'
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                    initial={{ scale: 1, opacity: 1 }}
                 ><FaToggleOff /></motion.button>
                <motion.button className='logout-button'
                   whileHover={{ scale: 1.05, opacity: 0.8 }}
                   initial={{ scale: 1, opacity: 1 }} 
                ><MdOutlineLogout /></motion.button>
                
            </div>
        </motion.div>
    );
};

export default LeftSidebar;
