import lineBlock from "../../images/line_block.png";
import img01 from "../../images/01.png";
import { BsArrowRight } from "react-icons/bs";

import css from "./content.module.css";

function Content() {
  return (
    <>
      <div className={css.contentBG}></div>
      <div className={css.content}>
        <div className={css.contentBlockOne}>
          <div className={css.list}>
            <h3 className={css.opacityTitle}>01</h3>
            <ul>
              <li className={css.upperTitle}>
                <img src={lineBlock} alt="line" className={css.lineBlock} />
                <p className={css.yellowTitle}>GET STARTED</p>
              </li>
              <li className={css.bottomBlock}>
                <h4 className={css.blockTitle}>What level of hiker are you?</h4>
                <p className={css.blockText}>
                  Determining what level of hiker you are can be an important
                  tool when planning future hikes. This hiking level guide will
                  help you plan hikes according to different hike ratings set by
                  various websites like All Trails and Modern Hiker. What type
                  of hiker are you – novice, moderate, advanced moderate,
                  expert, or expert backpacker?
                </p>
                <button className={css.contentButton}>
                  <span className={css.yellowTitle}>read more</span>
                  <BsArrowRight color="#FBD784" />
                </button>
                {/* <div className={css.imgBlock}></div> */}
              </li>
            </ul>

            <img src={img01} alt="01" className={css.img} />
          </div>
        </div>

        <div className={css.contentBlock}>
          <div className={css.list}>
            <h3 className={css.opacityTitle}>02</h3>
            <ul>
              <li className={css.upperTitle}>
                <img src={lineBlock} alt="line" className={css.lineBlock} />
                <p className={css.yellowTitle}>GET STARTED</p>
              </li>
              <li className={css.bottomBlock}>
                <h4 className={css.blockTitle}>What level of hiker are you?</h4>
                <p className={css.blockText}>
                  Determining what level of hiker you are can be an important
                  tool when planning future hikes. This hiking level guide will
                  help you plan hikes according to different hike ratings set by
                  various websites like All Trails and Modern Hiker. What type
                  of hiker are you – novice, moderate, advanced moderate,
                  expert, or expert backpacker?
                </p>
                <button className={css.contentButton}>
                  <span className={css.yellowTitle}>read more</span>
                  <BsArrowRight color="#FBD784" />
                </button>
                {/* <div className={css.imgBlock}></div> */}
              </li>
            </ul>

            <img src={img01} alt="01" className={css.img} />
          </div>
        </div>

        <div className={css.contentBlock}>
          <div className={css.list}>
            <h3 className={css.opacityTitle}>03</h3>
            <ul>
              <li className={css.upperTitle}>
                <img src={lineBlock} alt="line" className={css.lineBlock} />
                <p className={css.yellowTitle}>GET STARTED</p>
              </li>
              <li className={css.bottomBlock}>
                <h4 className={css.blockTitle}>What level of hiker are you?</h4>
                <p className={css.blockText}>
                  Determining what level of hiker you are can be an important
                  tool when planning future hikes. This hiking level guide will
                  help you plan hikes according to different hike ratings set by
                  various websites like All Trails and Modern Hiker. What type
                  of hiker are you – novice, moderate, advanced moderate,
                  expert, or expert backpacker?
                </p>
                <button className={css.contentButton}>
                  <span className={css.yellowTitle}>read more</span>
                  <BsArrowRight color="#FBD784" />
                </button>
                {/* <div className={css.imgBlock}></div> */}
              </li>
            </ul>

            <img src={img01} alt="01" className={css.img} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
