import React from "react";
import data2 from "./data2";
import ItemCard from "./ItemCard";
import video7 from "./video7.mp4"
import VideoPlayer from "react-background-video-player";

const Order = () => {
  return (
    <>
    <div>
      <div id="video">
    <VideoPlayer
         className="video"
        src={video7} alt={video7} height={100}
        autoPlay={true}
        muted={true}
      />
      </div>
      
      <h1 className="text-center mt-3">RESTAURANT MENU</h1>
      <section className="py-1 container">
        <div className="row justify-content-center">
          {data2.productData.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
       
        </div>
      </section>
      </div>
    </>
  );
};

export default Order;