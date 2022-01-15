import Head from "next/head";
import img3 from "../public/img3.png";
import CardImg from "../components/CardImg";
import styles from "../styles/Home.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleContactForm = async (e) => {
    e.preventDefault();
    const submitContactForm = async () => {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ fullName, email, message }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
    };

    submitContactForm();

    setFullName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <Head>
        <title>Ninja List | Contact</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={"row " + styles.content}>
        <div className="col-md-5 order-md-2">
          <div className={styles.content}>
            <h1>Contact</h1>
            <div>
              <h3>Location</h3>
              <p>
                Sona Topas Tower, <br />
                Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2, Karet,
                <br /> Jakarta Selatan, 12920.
              </p>
            </div>
            <div>
              <h3>Email</h3>
              <p>info@62trade.com</p>
            </div>
            <div>
              <form onSubmit={(e) => handleContactForm(e)}>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="fullname"
                  name="fullname"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  className="form-control mb-3"
                  id="message"
                  rows="3"
                  placeholder="Your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  size="normal"
                  // ref={reRef}
                />
                <button className={`btn mt-3 ${styles.btn}`}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-5 order-md-1 d-flex justify-content-center ">
          <CardImg img={img3} />
        </div>
      </div>
    </>
  );
};

export default Contact;
