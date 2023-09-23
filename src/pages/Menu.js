import React from "react";
import "../styles/Menu.css";
import video2 from "../video2.mp4"
import video3 from "../video3.mp4"
import video4 from "../video4.mp4"
import video5 from "../video5.mp4"
import video6 from "../video6.mp4"
import video7 from "../video7.mp4"
import Footer from "../components/Footer"
import VideoPlayer from "react-background-video-player";
import { Link } from "react-router-dom";
const Menu=()=>{
    return(
        <div id="slide">
            <div id="video2">
    <Link to="/order"><VideoPlayer
         className="video"
        src={video2} alt={video2} height={10}
        autoPlay={true}
        muted={true}
      /></Link>
      </div>
      <div id="video3">
    <Link to="/pizz"><VideoPlayer
         className="video"
        src={video3} alt={video3} height={10}
        autoPlay={true}
        muted={true}
      /></Link>
      </div>
      <div id="video4">
    <Link to="/order"><VideoPlayer
         className="video"
        src={video4} alt={video4} height={10}
        autoPlay={true}
        muted={true}
      /></Link>
      </div>
      <div id="video5">
    <Link to="/order"><VideoPlayer
         className="video"
        src={video5} alt={video5} height={10}
        autoPlay={true}
        muted={true}
      /></Link>
      </div>
      <div id="video6">
    <Link to="/order"><VideoPlayer
         className="video"
        src={video6} alt={video6} height={10}
        autoPlay={true}
        muted={true}
      /></Link>
      </div>
      <div id="video7">
    <Link to="/order"><VideoPlayer
         className="video"
        src={video7} alt={video7} height={10}
        autoPlay={true}
        muted={true}
      /></Link>
      </div>
            <Footer />
        </div>
    )
}
export default Menu;