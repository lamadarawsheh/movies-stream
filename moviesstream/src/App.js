import { useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";


import { HBOImg, appleTVImg, disneyImg, huluImg, netflixImg, primeImg ,ShrekImg,RiverdaleImg } from "./assets";
function App() {
  const [mediaServices] = useState([
    { name: 'Apple Tv', img: appleTVImg, id: 1 },
    { name: 'Disney Tv', img: disneyImg, id: 2 },
    { name: 'HBO Max', img: HBOImg, id: 3 },
    { name: 'Hulu', img: huluImg, id: 4 },
    { name: 'Netflix', img: netflixImg, id: 5 },
    { name: 'Prime', img: primeImg, id: 6 },
  ])
  const [Genres] = useState([
    { name: 'Action', id: 1 },
    { name: 'Comedy', id: 2 },
    { name: 'Drama', id: 3 },
    { name: 'Sci-Fi', id: 4 },
    { name: 'Thriller', id: 5 },
    { name: 'Western', id: 6 },
  ])
  const Profile = { name: "mario", img: 'hdgjdgf', id: 4 }
  const [Users] = useState([
    { name: 'yoshi', img: 'lorem ipsum...', id: 1 },
    { name: 'mario', img: 'lorem ipsum...', id: 2 },
    { name: 'ff', img: 'lorem ipsum...', id: 3 },

  ])

  const [Movies] = useState([
    { title: 'Shrek3', img: ShrekImg, description: 'eeee', year: 2023, feature: 'hhhh', id: 2 },

    { title: 'Riverdale 2', img: RiverdaleImg, description: 'eeee', year: 2019, feature: 'hhhh', id: 4 },


  ])
  return (
    <div className="main-container">
      <LeftSidebar Profile={Profile} Users={Users} />
      <div className="main-content">
        <Navbar />
        <Content Movies={Movies} />
      </div>
      <RightSidebar mediaServices={mediaServices} Genres={Genres} />
  </div>
    
  );
}

export default App;
