import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ id, imageSrc, title, price, desc }) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <div className={styles.container}>
        <Image src={imageSrc} alt={title} width="500" height="500" />
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>From {price}$</span>
        <p className={styles.desc}>{desc}</p>
      </div>
    </Link>
  );
};

export default PizzaCard;
