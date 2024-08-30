import { BsFire } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import MovieCard from "./MovieCard";
import { DuneImg, ShrekImg, SquidgameImg, RiverdaleImg, TallgirlImg } from "../assets";

const Content = ({ Movies }) => {
    const Dune = { title: 'Dune', img: DuneImg, description: '4.2', year: 2024, feature: 'hhhh', id: 1 };
    const Squidgame = { title: 'Squid game', img: SquidgameImg, description: '#1 in Series', year: 2021, feature: 'hhhh', id: 2 };
    const Tallgirl = { title: 'Tall girl', img: TallgirlImg, description: 'eeee', year: 2022, feature: 'hhhh', id: 3 };

    return (
        <div className="home-Content">
            <div className="display-moviescard-section">
                <div className="#1moviescards">
                    <MovieCard backgroundImage={Squidgame.img}
                        title={Squidgame.title}
                        description={Squidgame.description}
                        icon={<BsFire/>}
                        year={Squidgame.year} 
                        iconDirection = "Right"/>
                </div>
                <div className="Ratedmoviescards">
                    <MovieCard backgroundImage={Dune.img}
                        title={Dune.title}
                        description={Dune.description}
                        icon={<FaStar />}
                        year={Dune.year} 
                        iconDirection = "Left" />
                       
                </div>
            </div>

            <div className="resume-and-preview-section">
                <div className="continue-watching-section">
                    <div className="continue-watching-bar">
                        <h3>Continue watching</h3>
                        <p>(3 Movies Remaining)</p>
                        <button>see more</button>
                    </div>
                    <div className="movies-to-resume-section">
                        {Movies.map((movie) => (
                            <div className="movie-to-resume" key={movie.id}>
                                <div className="movie-image" >
                                <MovieCard backgroundImage={movie.img} />
                                </div>
                                <div className="play-movie">
                                    <p>{movie.title}  {movie.year}</p>
                                    <button><CiPlay1/></button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="preview-movie">
                <MovieCard backgroundImage={Tallgirl.img}
                         />

                </div>

            </div>

        </div>

    );
}

export default Content;