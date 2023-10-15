import React from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

import Hg from "../Hg/Hg";
import MgSection from "../MgSection/MgSection";
import VgSection from "../VgSection/VgSection";

import css from "./main.module.css";
function Main() {
  return (
    <div className={css.main}>
      <Hg />
      <Header />
      <MgSection />
      <VgSection />
      <Content />

      <Footer />
    </div>
  );
}

export default Main;
