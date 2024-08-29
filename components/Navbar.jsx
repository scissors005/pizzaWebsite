import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((acc, item) => acc + parseInt(item.quantity, 10), 0);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}><Link href="/#featured">Featured</Link></li>
          <li className={styles.listItem}><Link href="/#menu">Menu</Link></li>
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <li className={styles.listItem}><Link href="/#blog">Blog</Link></li>
          <li className={styles.listItem}><Link href="/#events">Events</Link></li>
          <li className={styles.listItem}><Link href="/#contact">Contact</Link></li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="Cart" width="30px" height="30px" />
            <div className={styles.counter}>{totalQuantity}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
