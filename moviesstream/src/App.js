import Navbar from "./Navbar";
import Content from "./components/Content";
import RightSidebar from "./RightSideBar";
import LeftSidebar from "./LeftSideBar";


function App() {

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
