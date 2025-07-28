import React from "react";
import "./About.css";
import profilePic from "../Components/logo192.png"; // Replace with your actual image path

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src="https://img.freepik.com/premium-vector/set-brown-chocolate-white-classic-soft-serve-ice-cream-waffle-cone-close-up-isolated-background_212889-3468.jpg" alt="Yakupha Ntonintshi" />
        </div>
        <div className="about-text">
          <h1 className="lickandlove">About Lick&Love</h1>
          <p>
          <strong>Lick & Love</strong> was founded in 2021 in the heart of Cape Town, South Africa with one mission: to bring joy, connection, and a touch of nostalgia through bold, creamy scoops of artisan ice cream.
          </p>
          <p>
          Registered officially on June 14, 2021, Lick & Love began as a weekend market stall in the vibrant streets of the V&A Waterfront, capturing hearts with its creative blends and all-natural ingredients. In just a few years, we've grown into a beloved local brand with a loyal following.
          </p>
          <p>
          Every tub of Lick & Love ice cream is handcrafted using locally sourced dairy, real fruit, fair-trade chocolate, and plant-based alternatives for our vegan fans.
          </p>
          <p>
          Today, our small but passionate team works from our microcreamery in Woodstock, Cape Town, where we continue to experiment with flavor, texture, and presentation to give you the most unforgettable dessert experience.  Whether you're popping into one of our seasonal pop-ups or ordering online, we’re here to make your moments sweeter — one lick at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
