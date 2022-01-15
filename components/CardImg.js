import Image from "next/image";
import styles from "../styles/Home.module.css";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";

const CardImg = ({ img }) => {
  return (
    <div className={`card ${styles.card}`}>
      <Image src={img} alt={img} className={styles.card_img} width={350} height={350} />
    </div>
  );
};

export default CardImg;
