import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";

const Cart = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price[item.size] * item.quantity, 0);

  const handleCheckout = () => {
    router.push({
      pathname: `/orders/[id]`,
      query: { id: '129837819237', total: cartTotal }, // Pass the total as a query parameter
    });
  };

  return (
    <div id="cart" className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr className={styles.tr} key={index}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="cover"
                      alt={item.name}
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{item.name}</span>
                </td>
                <td>
                  <span className={styles.extras}>{item.extras.join(', ')}</span>
                </td>
                <td>
                  <span className={styles.price}>${item.price[item.size]}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{item.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>${item.price[item.size] * item.quantity}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cartTotal}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cartTotal}
          </div>
          <button className={styles.button} onClick={handleCheckout}>
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
