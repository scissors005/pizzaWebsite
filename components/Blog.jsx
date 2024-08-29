import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  const slides = [
    {
      img: 'https://images.unsplash.com/photo-1607207504006-89723ee11236?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBkb3VnaHxlbnwwfHwwfHx8MA%3D%3D',
      text: 'It all starts with the dough, the foundation of any great pizza. The dough is carefully mixed and allowed to rise, developing a deep, rich flavor.',
    },
    {
      img: 'https://images.unsplash.com/photo-1619995746608-bef3de4f075a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBzYXVjZXxlbnwwfHwwfHx8MA%3D%3D',
      text: 'Next comes the sauce, made from ripe tomatoes and a blend of herbs and spices. The sauce is spread evenly over the dough, adding a burst of flavor to every bite.',
    },
    {
      img: 'https://images.unsplash.com/photo-1609280797194-acf56a8b95aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphJTIwY2hlZXNlfGVufDB8fDB8fHww',
      text: 'The cheese is then generously sprinkled over the sauce. Mozzarella is the traditional choice, melting beautifully into a creamy, gooey layer.',
    },
    {
      img: 'https://images.unsplash.com/photo-1536622308015-0740925b8221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBiYWtpbmclMjBvdmVufGVufDB8fDB8fHww',
      text: 'Finally, the pizza is baked in a hot oven until the crust is golden brown and the cheese is bubbling and slightly caramelized. A perfect pizza is ready to be enjoyed!',
    },
  ];

  return (
    <div id="blog" className={styles.blogContainer}>
      <Carousel
        showArrows
        infiniteLoop
        useKeyboardArrows
        autoPlay={false}
        showThumbs={false}
      >
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <div className={styles.imageContainer}>
              <Image src={slide.img} alt="Pizza making step" width={500} height={300} />
            </div>
            <div className={styles.textContainer}>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Blog;
