import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import navStyle from "../styles/Nav.module.css";
import Link from "next/link";
const useclickOutside = (handler) => {
  const domNode = new useRef();
  useEffect(() => {
    let maybeHandler = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};
const Nav = () => {
  const [searchInputIsActive, setSearchInputIsActive] = new useState(false);
  const domNode = useclickOutside(() => {
    setSearchInputIsActive(false);
  });

  return (
    <>
      <div className={navStyle.navigation_header__container}>
        <nav className={navStyle.navContainer}>
          <div className={navStyle.logoWrapper}>
            <Link href="/">
              <a>
                <img src="/logo.png" />
              </a>
            </Link>
          </div>
          <ul className={navStyle.navigationLinks}>
            <li className={navStyle.active}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
          <div className={navStyle.icons}>
            <div className={navStyle.icons_Wrapper}>
              <div
                ref={domNode}
                onClick={() => {
                  setSearchInputIsActive(true);
                }}
                className={`${navStyle.searchIcon_wrapper__border} ${
                  searchInputIsActive ? navStyle.active : ""
                }`}
              >
                <img src="/search.svg" alt="" />
                <form className={navStyle.searchIcon_wrapper}>
                  <input type="text" />
                </form>
              </div>
              <div className={navStyle.profileIcon_wrapper}>
                <FontAwesomeIcon
                  className={navStyle.profile_icon}
                  icon={faUserCircle}
                />
              </div>
              <div className={navStyle.basketIcon_wrapper}>
                <img src="/basket.svg" alt="" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
