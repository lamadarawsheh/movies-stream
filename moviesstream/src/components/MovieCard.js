import { FaBeer } from "react-icons/fa";
const MovieCard = ({ backgroundImage, title, description, icon, year ,iconDirection}) => {
    const toplLeftDirectionDescriptionIcon = iconDirection == "Left" ? 'top-left-left' : 'top-left-right';
    return (

        <div className="moviecard-card" style={{ backgroundImage: `url(${backgroundImage})` }} >

            {description && <div className="top-left">
                <div className={toplLeftDirectionDescriptionIcon} >
                    <button>{icon}</button>
                    <span className="description">{description}</span>
                </div>
            </div>}

            {
                title && <div className="bottom-left">
                    <div className="title-year">
                        <h1 className="title">{title}</h1>
                        <p className="year">{year}</p>
                    </div>
                </div>
            }


        </div>


    );
}

export default MovieCard;
