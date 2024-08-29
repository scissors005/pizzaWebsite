import { useRouter } from "next/router";
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const router = useRouter();
  const { total } = router.query;

  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {total > 0 ? (
          <>
            <div className={styles.row}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.trTitle}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.tr}>
                    <td>
                      <span className={styles.id}>129837819237</span>
                    </td>
                    <td>
                      <span className={styles.name}>John Doe</span>
                    </td>
                    <td>
                      <span className={styles.address}>Elton st. 212-33 LA</span>
                    </td>
                    <td>
                      <span className={styles.total}>${total}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.row}>
              <div className={statusClass(0)}>
                <Image src="/img/paid.png" width={30} height={30} alt="Payment" />
                <span>Payment</span>
                <div className={styles.checkedIcon}>
                  <Image
                    src="/img/checked.png"
                    width={20}
                    height={20}
                    alt="Checked"
                  />
                </div>
              </div>
              <div className={statusClass(1)}>
                <Image src="/img/bake.png" width={30} height={30} alt="Preparing" />
                <span>Preparing</span>
                <div className={styles.checkedIcon}>
                  <Image
                    src="/img/checked.png"
                    width={20}
                    height={20}
                    alt="Checked"
                  />
                </div>
              </div>
              <div className={statusClass(2)}>
                <Image src="/img/bike.png" width={30} height={30} alt="On the way" />
                <span>On the way</span>
                <div className={styles.checkedIcon}>
                  <Image
                    src="/img/checked.png"
                    width={20}
                    height={20}
                    alt="Checked"
                  />
                </div>
              </div>
              <div className={statusClass(3)}>
                <Image src="/img/delivered.png" width={30} height={30} alt="Delivered" />
                <span>Delivered</span>
                <div className={styles.checkedIcon}>
                  <Image
                    src="/img/checked.png"
                    width={20}
                    height={20}
                    alt="Checked"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.noOrderMessage}>No orders placed yet</div>
        )}
      </div>
      {total > 0 && (
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>${total}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>${total}
            </div>
            <button disabled className={styles.button}>
              PAID
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
