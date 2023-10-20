import { BsArrowDown } from "react-icons/bs";
// import heroImg from "./../../images/line_hero.png";

import css from "./hero.module.css";
function Hero() {
  return (
    <div className={css.hero}>
      <h2 className={css.guide}>
        {/* <img src={heroImg} alt="hero line " className={css.heroImg} /> */}A
        HIKING GUIDE
      </h2>
      <h1 className={css.title}>Be prepared for the Mountains and beyond!</h1>
      <button type="button" className={css.heroButton}>
        scroll down
        <BsArrowDown height={24} width={16} />
      </button>
    </div>
  );
}

export default Hero;
