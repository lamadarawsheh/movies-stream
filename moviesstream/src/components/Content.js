import { motion } from 'framer-motion';
import { BsFire } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import MovieCard from "./MovieCard";
import { DuneImg, SquidgameImg, TallgirlImg } from "../assets";

const Content = ({ Movies }) => {
    const Dune = { title: 'Dune', img: DuneImg, description: '4.2', year: 2024, feature: 'hhhh', id: 1 };
    const Squidgame = { title: 'Squid game', img: SquidgameImg, description: '#1 in Series', year: 2021, feature: 'hhhh', id: 2 };
    const Tallgirl = { title: 'Tall girl', img: TallgirlImg, description: 'eeee', year: 2022, feature: 'hhhh', id: 3 };

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };
    return (
        <motion.div className="home-Content"
      
        >
            <motion.div className="display-moviescard-section"
                      initial="hidden"
                      animate="visible"
                      variants={contentVariants}
                      transition={{ type: 'spring', stiffness: 120, damping: 30, delay:.7}}
            >
                <motion.div className="#1moviescards"
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                    initial={{ scale: 1, opacity: 1 }}
                >
                    <MovieCard backgroundImage={Squidgame.img}
                        title={Squidgame.title}
                        description={Squidgame.description}
                        icon={<BsFire/>}
                        year={Squidgame.year} 
                        iconDirection = "Right"/>
                </motion.div>
                <motion.div className="Ratedmoviescards"
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                    initial={{ scale: 1, opacity: 1 }}
                >
                    <MovieCard backgroundImage={Dune.img}
                        title={Dune.title}
                        description={Dune.description}
                        icon={<FaStar />}
                        year={Dune.year} 
                        iconDirection = "Left" />
                       
                </motion.div>
            </motion.div>

            <div className="resume-and-preview-section">
                <div className="continue-watching-section">
                    <motion.div className="continue-watching-bar"
                           initial={{ y: '-100%', opacity: 0 }}
                           animate={{ y: '0%', opacity: 1 }}
                           transition={{ type: 'spring', stiffness: 120, damping: 30, delay:.3 }}
                    >
                        <h3>Continue watching</h3>
                        <p>(3 Movies Remaining)</p>
                        <motion.button
                             whileHover={{ scale: 1.05, opacity: 0.8 }}
                             initial={{ scale: 1, opacity: 1 }}
                        >
                        see more</motion.button>
                    </motion.div>
                    <motion.div className="movies-to-resume-section"
                      initial="hidden"
                      animate="visible"
                      variants={contentVariants}
                      transition={{ type: 'spring', stiffness: 120, damping: 30, delay:.7}}
                    >
                        {Movies.map((movie) => (
                            <motion.div className="movie-to-resume" key={movie.id}
                            whileHover={{ scale: 1.05, opacity: 0.8 }}
                            initial={{ scale: 1, opacity: 1 }}
                            >
                                <div className="movie-image" >
                                <MovieCard backgroundImage={movie.img} />
                                </div>
                                <div className="play-movie">
                                    <p>{movie.title}  {movie.year}</p>
                                    <motion.button 
                                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                                      initial={{ scale: 1, opacity: 1 }}
                                      ><CiPlay1/></motion.button>
                                </div>

                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <motion.div className="preview-movie-section"
                    initial="hidden"
                    animate="visible"
                    variants={contentVariants}
                    transition={{ type: 'spring', stiffness: 120, damping: 30, delay:.7}}
                   
                >
                    <motion.div className="preview-movie"  
                           whileHover={{ scale: 1.05, opacity: 0.8 }}
                           initial={{ scale: 1, opacity: 1 }}
                    >
                    <MovieCard backgroundImage={Tallgirl.img}
                            />
                    </motion.div>
                  

                </motion.div>

            </div>

        </motion.div>

    );
}

export default Content;