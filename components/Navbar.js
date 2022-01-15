import React from "react";
import Link from "next/link";
import phoneCall from "../public/phone-call.svg";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSmile } from "@fortawesome/free-regular-svg-icons"; // import the icons you need

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/about">
        <a className={styles.nav_item}>
          <div className={styles.nav_link}>
            <FontAwesomeIcon icon={faSmile} className={styles.icon} />
            <span>About</span>
          </div>
        </a>
      </Link>
      <Link href="/visimisi">
        <a className={styles.nav_item}>
          <div className={styles.nav_link}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
              
            >
              <path
                d="M15 23.75L23.75 15L27.5 18.75L18.75 27.5L15 23.75Z"
                stroke="#3E2E83"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5 16.25L20.625 6.875L2.5 2.5L6.875 20.625L16.25 22.5L22.5 16.25Z"
                stroke="#3E2E83"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 2.5L11.9822 11.9822"
                stroke="#3E2E83"
                strokeWidth="2"
              />
              <circle
                cx="13.75"
                cy="13.75"
                r="2.5"
                stroke="#3E2E83"
                strokeWidth="2"
              />
            </svg>

            <span>Vision Mission</span>
          </div>
        </a>
      </Link>

      <Link href="/contact">
        <a className={styles.nav_item}>
          <div className={styles.nav_link}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <path
                d="M18.8125 6.25C20.0334 6.48821 21.1555 7.08532 22.0351 7.96492C22.9147 8.84452 23.5118 9.96658 23.75 11.1875M18.8125 1.25C21.3491 1.5318 23.7145 2.66772 25.5203 4.47126C27.3261 6.2748 28.465 8.63876 28.75 11.175M27.5 21.15V24.9C27.5014 25.2481 27.4301 25.5927 27.2906 25.9117C27.1511 26.2307 26.9466 26.517 26.6901 26.7523C26.4335 26.9877 26.1307 27.1669 25.8009 27.2784C25.4711 27.3899 25.1217 27.4313 24.775 27.4C20.9285 26.9821 17.2337 25.6677 13.9875 23.5625C10.9673 21.6433 8.40665 19.0827 6.48748 16.0625C4.37495 12.8015 3.06028 9.08874 2.64998 5.225C2.61874 4.87933 2.65982 4.53095 2.7706 4.20203C2.88138 3.87311 3.05944 3.57086 3.29343 3.31453C3.52743 3.05819 3.81223 2.85339 4.12972 2.71315C4.4472 2.57292 4.7904 2.50033 5.13748 2.5H8.88748C9.49411 2.49403 10.0822 2.70885 10.5422 3.10442C11.0021 3.49998 11.3026 4.04931 11.3875 4.65C11.5458 5.85008 11.8393 7.02841 12.2625 8.1625C12.4307 8.6099 12.4671 9.09614 12.3674 9.5636C12.2677 10.0311 12.0361 10.4601 11.7 10.8L10.1125 12.3875C11.8919 15.5169 14.483 18.1081 17.6125 19.8875L19.2 18.3C19.5398 17.9639 19.9689 17.7323 20.4364 17.6326C20.9038 17.5329 21.3901 17.5693 21.8375 17.7375C22.9716 18.1607 24.1499 18.4542 25.35 18.6125C25.9572 18.6982 26.5117 19.004 26.9081 19.4719C27.3046 19.9397 27.5152 20.537 27.5 21.15Z"
                
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Contact</span>
          </div>
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
