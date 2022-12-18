import React from "react";
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { SlButton } from '@shoelace-style/shoelace/dist/react';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.87/dist/');


const Home = () => {
  return (
    <>

      <h1>Home</h1>
      <SlButton variant="primary">Click me</SlButton>;
      

      <p> Introductory text</p>
      <p> Probably would usually also have a banner image or Carousel or similar</p>
    </>
  );
};
export default Home;
