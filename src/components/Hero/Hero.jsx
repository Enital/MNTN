import css from "./hero.module.css";
function Hero() {
  return (
    <div className={css.hero}>
      <h2 className={css.guide}>A HIKING GUIDE</h2>
      <h1 className={css.title}>Be prepared for the Mountains and beyond!</h1>
      <button>scroll down</button>
    </div>
  );
}

export default Hero;
