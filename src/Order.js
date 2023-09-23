import React from "react";
import data from "./data";

import Cart from "./Cart";
import ItemCard from "./ItemCard";
import video7 from "./video7.mp4"
import VideoPlayer from "react-background-video-player";
import { CartProvider } from "react-use-cart";
const Order = () => {
  return (
    <>
    <div>
      <div id="video">
    <VideoPlayer
         className="video"
        src={video7} alt={video7} height={200}
        autoPlay={true}
        muted={true}
      />
      </div>
      
      <h1 className="text-center mt-3">RESTAURANT MENU</h1>
      <section className="py-1 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
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
          <CartProvider>
        <Cart/>
      </CartProvider>
        </div>
      </section>
      </div>
    </>
  );
};

export default Order;