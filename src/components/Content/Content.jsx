import lineBlock from "../../images/line_block.png";
import img01 from "../../images/01.png";

import css from "./content.module.css";

function Content() {
  return (
    <div className={css.content}>
      <div className={css.blockOne}>
        <ul className={css.list}>
          <li className={css.upperTitle}>
            <h3 className={css.opacityTitle}>01</h3>
            <img src={lineBlock} alt="line" className={css.lineBlock} />
            <p className={css.yellowTitle}>GET STARTED</p>
          </li>
          <li className={css.bottomBlock}>
            <h4 className={css.blockTitle}>What level of hiker are you?</h4>
            <p className={css.blockText}>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <div className={css.imgBlock}></div>
          </li>
          <img src={img01} alt="01" className={css.img} />
        </ul>
      </div>

      <div className={css.blockTwo}>
        <ul className={css.list}>
          <li className={css.upperTitle}>
            <h3 className={css.opacityTitle}>02</h3>
            <p className={css.yellowTitle}>GET STARTED</p>
          </li>
          <li className={css.bottomBlock}>
            <h4 className={css.blockTitle}>What level of hiker are you?</h4>
            <p className={css.blockText}>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <div className={css.imgBlock}></div>
          </li>
          <img src={img01} alt="01" className={css.img} />
        </ul>
      </div>

      <div className={css.blockThree}>
        <ul className={css.list}>
          <li className={css.upperTitle}>
            <h3 className={css.opacityTitle}>03</h3>
            <p className={css.yellowTitle}>GET STARTED</p>
          </li>
          <li className={css.bottomBlock}>
            <h4 className={css.blockTitle}>What level of hiker are you?</h4>
            <p className={css.blockText}>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <div className={css.imgBlock}></div>
          </li>
          <img src={img01} alt="01" className={css.img} />
        </ul>
      </div>
    </div>
  );
}

export default Content;
