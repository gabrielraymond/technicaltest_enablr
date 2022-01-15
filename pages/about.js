import Head from "next/head";
import img1 from "../public/img1.png";
import CardImg from "../components/CardImg";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={"row " + styles.content}>
        <div className="col-md-5 order-md-2">
          <div className={styles.content}>
            <h1>About Us</h1>
            <p>
              Spanning from East to West. With 54,000 km Coastline and 17,500
              Islands.
            </p>
            <p>
              <span>
                INDONESIA, a resourceful land. Rich of flavors, natural
                beauties, and biodiversity.
              </span>
            </p>
            <p>
              62trade.com ready to take important role to empower international
              trades between Indonesia and the rest of the world.
              <br /> <br /> Ready to be a digital gateway for everyone, at any
              level of business.
              <br /> <br /> Let us walk together, hand in hand for a better
              future.
            </p>
          </div>
        </div>
        <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
          <CardImg img={img1} />
        </div>
      </div>
    </>
  );
};

export default About;
