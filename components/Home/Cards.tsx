import React from "react";
import styles from "../../styles/Home/Card.module.css";
import { ICards } from "@/pages";
import { Search404 } from "@/pages/404";

//


const Cards = ({filteredData}: {filteredData: ICards[]}) => {
  return (
    <>
      {/* card component */}
      {filteredData.length > 0 ? (
        <div className={styles.card_container}>
          {filteredData.map((data) => {
            return (
              <div className={styles.card_wrapper} key={data.id}>
                <div className={styles.card_width}>
                  <p className={styles.card_para}>
                    {data.name}
                  </p>
                  <p>
                    <span>Username:</span> {data.username}
                  </p>
                  <p>
                    <span>Website:</span> {data.website}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Search404 />
      )}
    </>
  );
};

export default Cards;
