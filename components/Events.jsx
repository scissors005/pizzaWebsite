import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/Events.module.css';
import Image from 'next/image';

const Events = () => {
  const reviews = [
    {
      customer: "John Doe",
      text: "The pizza was amazing! The crust was perfectly crispy, and the toppings were fresh and flavorful.",
      img: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      customer: "Jane Smith",
      text: "I loved the variety of pizzas available. The service was quick and the staff was friendly. Will definitely come back!",
      img: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      customer: "Mark Wilson",
      text: "The ambiance was great and the pizza even better. I tried the Margherita and it was delightful.",
      img: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      customer: "Lucy Brown",
      text: "Best pizza I've ever had! The cheese was perfectly melted and the sauce was just right. Highly recommend!",
      img: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      customer: "Emma Green",
      text: "A fantastic dining experience! The pizza was delicious, and the service was excellent.",
      img: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div id="events" className={styles.eventsContainer}>
      <Carousel
        showArrows
        infiniteLoop
        useKeyboardArrows
        autoPlay={false}
        showThumbs={false}
      >
        {reviews.map((review, index) => (
          <div className={styles.slide} key={index}>
            <div className={styles.imageContainer}>
              <Image src={review.img} alt={`Review by ${review.customer}`} width="100px" height="100px" className={styles.customerImage} />
            </div>
            <div className={styles.textContainer}>
              <h3>{review.customer}</h3>
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Events;
