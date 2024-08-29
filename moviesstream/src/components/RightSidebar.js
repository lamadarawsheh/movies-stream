import { motion } from 'framer-motion';
const RightSidebar = ({mediaServices,Genres}) => {
    return (
        <motion.div className="right-sidebar"
            initial={{ x: '100%' ,opacity:0}} // Start position (off-screen to the left)
            animate={{ x: 0 ,opacity:1 }} // End position (in view)
            transition={{ type: 'spring', stiffness: 120, damping: 30, delay:.3 }} // Smooth spring animation
        >
            
            <div className="mediaService-menu">
                <h4>Media Service</h4>
                {mediaServices.map((mediaService)=>(
                 
                     <motion.div className="mediaService-item"key={mediaService.id}
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                    initial={{ scale: 1, opacity: 1 }}>
                            <button><img src={mediaService.img} alt="" /></button>
                            <span>{mediaService.name}</span>
                       
                    </motion.div>
                
                ))}
            </div>

            <div className="Genre-menu">
                <h4 >Genre</h4>
                {Genres.map((Genre)=>(
                  
                        <motion.div className="Genre-item" key={Genre.id}whileHover={{ scale: 1.05, opacity: 0.8 }}
                        initial={{ scale: 1, opacity: 1 }}>
                            <button>{Genre.name}</button>
                        </motion.div>
                
                ))}
            </div>
          
        </motion.div>

        
    );
};

export default RightSidebar;
