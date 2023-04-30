import { Image } from "@chakra-ui/react";
import styles from '../styles/Home/Error.module.css'

export default function Network404() {
  return (
    <div className={styles.container}>
      <div className={styles.container_img}>
        <Image src="/home/sad.jpg" alt="sad face" />
      </div>
      <h1>OPPSSSS!! What a network</h1>
      <p>Please  check your network and try again</p>
    </div>
  );
}


export const Search404 =()=> {
    return (
      <div className={styles.search_container}>
        <div className={styles.search_container_img}>
          <Image src="/home/confused.jpg" alt="sad face" />
        </div>
        <h1>I cant find what you are  looking for!!!</h1>
      </div>
    );
  }
  