import css from "./content.module.css";

function Content() {
  return (
    <div className={css.content}>
      <div className={css.blockOne}>
        <ul>
          <li>
            <h3 className={css.opacityTitle}>01</h3>
            <p className={css.yellowTitle}>GET STARTED</p>
          </li>
          <li>
            <h4 className={css.blockTitle}>What level of hiker are you?</h4>
            <p className={css.blockText}>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <img src="../../images/01.png" alt="01" width={566} height={720} />
          </li>
        </ul>
      </div>

      <h3>02</h3>
      <h3>03</h3>
    </div>
  );
}

export default Content;
