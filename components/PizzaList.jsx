import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
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

  return (
    <div id="menu" className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {pizzas.map((pizza) => (
          <PizzaCard 
            key={pizza.id} 
            id={pizza.id} 
            imageSrc={pizza.img} 
            title={pizza.name} 
            price={pizza.price[0]} 
            desc={pizza.desc} 
          />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
