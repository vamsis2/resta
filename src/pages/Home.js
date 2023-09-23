
import { Link } from "react-router-dom";
import logo1 from "../img/logo30.jpg";
import "../styles/Home.css";
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${logo1})` }}>
  
     <h1 id="h2"> RESTAURANT </h1>
     <h2 id="h6"> BEST IN THE CITY </h2>
     <p id="line">-----------------------------------------------------------------------------------------</p>
      <div className="headerContainer">
        
        <Link to="/menu">
          <button id="order">MENU</button>
        </Link>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;