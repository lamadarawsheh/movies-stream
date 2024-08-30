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
        <div className ="left-sidebar">
            <div className="profile-section">
                    <button  className='profile-section-button-img'><img src={ProfileImg}></img></button>
                    <button className="icon-button">
                        <LuLayoutGrid className="Profile-section-icons" />
                    </button>
                    <button className="icon-button">
                        <MdOutlineExplore className="Profile-section-icons" />
                    </button>
                    <button className="icon-button">
                        <CiBookmark className="Profile-section-icons" />
                    </button>
                    <button className="icon-button">
                        <IoIosNotificationsOutline className="Profile-section-icons" />
                    </button>
                    <button className="icon-button">
                        <CiPlay1 className="Profile-section-icons" />
                    </button>
                    <button className="icon-button">
                        <RiSettings2Line className="Profile-section-icons" />
                    </button>



                    
            </div>
            <div className="users-list">
                    {Users.map((user)=>(
                            <button className="user-button" key={user.id}><img src={UserImg}></img></button>
                        
                        ))}
        
                    <button className='add-user-button'><FaPlus /></button>
            </div>
            <div className="left-sidebar-footer">
                 <button className='Toggle-button'><FaToggleOff /></button>
                <button className='logout-button'><MdOutlineLogout /></button>
                
            </div>
        </div>
    );
};

export default LeftSidebar;
