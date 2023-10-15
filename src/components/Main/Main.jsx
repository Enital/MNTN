import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

import HgSection from "../HgSection/HgSection";
import MgSection from "../MgSection/MgSection";
import VgSection from "../VgSection/VgSection";

import css from "./main.module.css";
import Hero from "../Hero/Hero";
function Main() {
  return (
    <div className={css.container}>
      <HgSection />
      <Header />
      <Hero />
      <MgSection />
      <VgSection />
      <Content />

      <Footer />
    </div>
  );
}

export default Main;
