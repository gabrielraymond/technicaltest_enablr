import Head from "next/head";
import img2 from "../public/img2.png";
import CardImg from "../components/CardImg";
import styles from "../styles/Home.module.css";

const Visimisi = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Vision Mission</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={"row " + styles.content}>
        <div className="col-md-5 order-md-2">
          <div className={styles.content}>
            <h1>Vision Mission</h1>
            <div>
              <h3>Our Vision</h3>
              <p>
                Becoming number one preferred digital platform of international
                trades for Indonesia and the world.
              </p>
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>
                Becoming number one preferred digital platform of international
                trades for Indonesia and the world.
              </p>
            </div>
            <div>
              <h3>Values</h3>
              <ol>
                <li>Simpe</li>
                <li>Trustworthy</li>
                <li>Problem Solver</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
          <CardImg img={img2} />
        </div>
      </div>
    </>
  );
};

export default Visimisi;
