
const RightSidebar = ({mediaServices,Genres}) => {
    return (
        <div className="right-sidebar">
            
            <div className="mediaService-menu">
                <h4>Media Service</h4>
                {mediaServices.map((mediaService)=>(
                 
                    <div className="mediaService-item"key={mediaService.id}>
                            <button><img src={mediaService.img} alt="Image 1" /></button>
                            <span>{mediaService.name}</span>
                       
                    </div>
                
                ))}
            </div>

            <div className="Genre-menu">
                <h4 >Genre</h4>
                {Genres.map((Genre)=>(
                  
                        <div className="Genre-item" key={Genre.id}>
                            <button>{Genre.name}</button>
                        </div>
                
                ))}
            </div>
          
        </div>

        
    );
};

export default RightSidebar;
