import css from "./footer.module.css";
function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.footerContent}>
        <div className={css.footerLogo}>
          <h4 className={css.logo}>MNTN</h4>
          <p className={css.logoText}>
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className={css.copyright}>
            Copyright 2019 MNTN, Inc. Terms & Privacy
          </p>
        </div>
        <div className={css.footerLinks}>
          <h4 className={css.yellowTitle}>More on The Blog</h4>
          <ul>
            <li className={css.list}>About MNTN</li>
            <li className={css.list}>Contributors & Writers</li>
            <li className={css.list}>Write For Us</li>
            <li className={css.list}>Contact Us</li>
            <li className={css.list}>Privacy Policy</li>
          </ul>
        </div>
        <div className={css.footerLinks}>
          <h4 className={css.yellowTitle}>More on MNTN</h4>
          <ul>
            <li className={css.list}>The Team</li>
            <li className={css.list}>Jobs</li>
            <li className={css.list}>Press</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
