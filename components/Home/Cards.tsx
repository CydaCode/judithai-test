import React from "react";
import styles from "../../styles/Home/Card.module.css";


// 
interface ICards {
    id: number;
    title: string;
    completed: true | false ;
  }

const Cards = ({data}: {data: ICards}, {filteredProducts}: any) => {
  return (
    <div className={styles.container}>
      
        return (
          <div className={styles.wrapper} key={data.id}>
            <div className={styles.width}>
              <p><span>Title:</span> {data.title}</p>
              <p><span>Status:</span> {data.completed}</p>
            </div>
          </div>
        );
 
    </div>
  );
};

export default Cards;
