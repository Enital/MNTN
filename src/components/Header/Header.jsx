// import headerSvg from "../../images/icons/cart.svg";

import css from "./header.module.css";

function Header() {
  return (
    <div className={css.header}>
      <h2 className={css.title}>MNTN</h2>
      <ul className={css.headerList}>
        <li className={css.headerItem}>
          <a href="#!">Equipment</a>
        </li>
        <li className={css.headerItem}>
          <a href="#!">About us</a>
        </li>
        <li className={css.headerItem}>
          <a href="#!">Blog</a>
        </li>
      </ul>
      <button type="button" className={css.headerButton}>
        {/* <img src={headerSvg} alt="cart" className={css.headerSvg} /> */}
        <p>Account</p>
      </button>
    </div>
  );
}

export default Header;
