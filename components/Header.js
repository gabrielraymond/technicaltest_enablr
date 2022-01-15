import Image from "next/image";
import styles from "../styles/Home.module.css";
import logoPic from "../public/Logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 50 ? setStickyClass(`${styles.header} fixed fixed-top`) : setStickyClass("");
    }
  };

  return (
    
      <header className={`navbar navbar-expand-lg  ${stickyClass}`} style={{zIndex:"20"}}>
        <div className={`container ${styles.brand}`}>
          <Link href="/about">
            <a>
              <Image
                src={logoPic}
                width={30}
                height={26}
                className={styles.logoImg}
              />
              <span className={styles.logoText}>Logo here</span>
            </a>
          </Link>
          <span>Resourceful Indonesia</span>
        </div>
      </header>
    
  );
};

export default Header;
