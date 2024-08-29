import { useState } from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import styles from "../../styles/Product.module.css";

const Product = ({ product }) => {
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleExtraChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.id;

    if (checked) {
      setExtras((prev) => [...prev, value]);
    } else {
      setExtras((prev) => prev.filter((extra) => extra !== value));
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        ...product,
        size,
        extras,
        quantity,
      });
    } else {
      alert("Quantity must be greater than 0");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.img} objectFit="contain" layout="fill" alt={product.name} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.name}</h1>
        <span className={styles.price}>${product.price[size]}</span>
        <p className={styles.desc}>{product.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div
            className={`${styles.size} ${size === 0 ? styles.active : ''}`}
            onClick={() => setSize(0)}
          >
            <Image src="/img/size.png" layout="fill" alt="Small" />
            <span className={styles.number}>Small</span>
          </div>
          <div
            className={`${styles.size} ${size === 1 ? styles.active : ''}`}
            onClick={() => setSize(1)}
          >
            <Image src="/img/size.png" layout="fill" alt="Medium" />
            <span className={styles.number}>Medium</span>
          </div>
          <div
            className={`${styles.size} ${size === 2 ? styles.active : ''}`}
            onClick={() => setSize(2)}
          >
            <Image src="/img/size.png" layout="fill" alt="Large" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
              onChange={handleExtraChange}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
              onChange={handleExtraChange}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
              onChange={handleExtraChange}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
              onChange={handleExtraChange}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={styles.quantity}
          />
          <button 
            className={styles.button} 
            onClick={handleAddToCart} 
            style={{ opacity: quantity > 0 ? 1 : 0.6 }} 
            disabled={quantity <= 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
    { params: { id: "4" } },
    { params: { id: "5" } },
    { params: { id: "6" } },
    { params: { id: "7" } },
    { params: { id: "8" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const pizzas = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1564936281291-294551497d81?q=80&w=2852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Margherita",
      price: [12.5, 14.5, 16.5],
      desc: "Classic pizza with tomato sauce, mozzarella, and basil."
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1692737580547-b45bb4a02356?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcHBlcm9uaXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Pepperoni",
      price: [14.0, 16.0, 18.0],
      desc: "Topped with pepperoni slices and mozzarella."
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJCUSUyMENoaWNrZW4lMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
      name: "BBQ Chicken",
      price: [15.5, 17.5, 19.5],
      desc: "Grilled chicken, BBQ sauce, and red onions."
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmVnZ2llJTIwc3VwcmVtZSUyMHBpenphfGVufDB8fDB8fHww",
      name: "Veggie Supreme",
      price: [13.5, 15.5, 17.5],
      desc: "Loaded with bell peppers, onions, mushrooms, and olives."
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1679310290400-53df391fae3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF3YWlpYW4lMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Hawaiian",
      price: [14.5, 16.5, 18.5],
      desc: "Ham and pineapple on a tomato base."
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvdXIlMjBjaGVlc2UlMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Four Cheese",
      price: [16.0, 18.0, 20.0],
      desc: "Mozzarella, parmesan, gorgonzola, and cheddar."
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1705286324371-d6a6d9519dc2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdCUyMGxvdmVycyUyMHBpenphfGVufDB8fDB8fHww",
      name: "Meat Lovers",
      price: [17.0, 19.0, 21.0],
      desc: "Packed with pepperoni, sausage, bacon, and ham."
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVzdG8lMjBkZWxpZ2h0JTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
      name: "Pesto Delight",
      price: [15.0, 17.0, 19.0],
      desc: "Pesto sauce with fresh tomatoes and mozzarella."
    }
  ];
  
  const product = pizzas.find((pizza) => pizza.id.toString() === params.id);

  return { props: { product } };
}

export default Product;
