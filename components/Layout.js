import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <div className='container-sm'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
