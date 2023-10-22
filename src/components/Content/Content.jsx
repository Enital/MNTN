import lineBlock from "../../images/line_block.png";
import img01 from "../../images/01.png";
import img02 from "../../images/02.png";
import img03 from "../../images/03.png";
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
              </li>
            </ul>

            <img src={img01} alt="01" className={css.img} />
          </div>
        </div>

        <div className={css.contentBlock}>
          <div className={css.list}>
            <img src={img02} alt="02" className={css.imgRev} />
            <h3 className={css.opacityTitleReverse}>02</h3>
            <ul>
              <li className={css.upperTitleReverse}>
                <img src={lineBlock} alt="line" className={css.lineBlock} />
                <p className={css.yellowTitle}>Hiking Essentials</p>
              </li>
              <li className={css.bottomBlockReverse}>
                <h4 className={css.blockTitle}>
                  Picking the right Hiking Gear!
                </h4>
                <p className={css.blockText}>
                  The nice thing about beginning hiking is that you don’t really
                  need any special gear, you can probably get away with things
                  you already have. Let’s start with clothing. A typical mistake
                  hiking beginners make is wearing jeans and regular clothes,
                  which will get heavy and chafe wif they get sweaty or wet.
                </p>
                <button className={css.contentButton}>
                  <span className={css.yellowTitle}>read more</span>
                  <BsArrowRight color="#FBD784" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.contentBlock}>
          <div className={css.list}>
            <h3 className={css.opacityTitle}>03</h3>
            <ul>
              <li className={css.upperTitle}>
                <img src={lineBlock} alt="line" className={css.lineBlock} />
                <p className={css.yellowTitle}>where you go is the key</p>
              </li>
              <li className={css.bottomBlock}>
                <h4 className={css.blockTitle}>Understand Your Map & Timing</h4>
                <p className={css.blockText}>
                  To start, print out the hiking guide and map. If it’s raining,
                  throw them in a Zip-Lock bag. Read over the guide, study the
                  map, and have a good idea of what to expect. I like to know
                  what my next landmark is as I hike. For example, I’ll read the
                  guide and know that say, in a mile, I make a right turn at the
                  junction..
                </p>
                <button className={css.contentButton}>
                  <span className={css.yellowTitle}>read more</span>
                  <BsArrowRight color="#FBD784" />
                </button>
              </li>
            </ul>

            <img src={img03} alt="03" className={css.img} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
