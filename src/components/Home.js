import React from 'react';
import "./page/products/Products.css";
import Nav from "./nav/nav"
import Gallery from "../components/gallery/gallery";
import Featured from './featured';

const Home = () => {
  return (
    <>
    <Nav />
    <Featured />
    <Gallery />
    </>
  )
}

export default Home