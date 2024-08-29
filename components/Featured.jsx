import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphJTIwYmFubmVyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphJTIwZWF0aW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBlYXRpbmd8ZW58MHx8MHx8fDA%3D",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div id="featured" className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;
