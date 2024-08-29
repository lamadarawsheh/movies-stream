
const RightSidebar = ({mediaServices,Genres}) => {
    return (
        <div className="right-sidebar">
            
            <div className="mediaService-menu">
                <h4>Media Service</h4>
                {mediaServices.map((mediaService)=>(
                <div className="mediaService-preview" key={mediaService.id}>   
                    <div className="mediaService-item">
                            <img src={mediaService.img} alt="Image 1" />
                            <span>{mediaService.name}</span>
                       
                    </div>
                </div>
                ))}
            </div>

            <div className="Genre-menu">
                <h4 >Genre</h4>
                {Genres.map((Genre)=>(
                <div className="Genre-preview" key={Genre.id}>   
                        <div className="Genre-item">
                            <a href="http://google.com">{Genre.name}</a>
                        </div>
                </div>
                ))}
            </div>
          
        </div>

        
    );
};

export default RightSidebar;
