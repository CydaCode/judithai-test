import React from "react";
import styles from "../../styles/Home/Search.module.css";
import { Input, Image } from "@chakra-ui/react";
import Cards from "./Cards";

interface IFilter {
  title: string;
}

const filterTitle: IFilter[] = [
  {
    title: "All",
  },
  {
    title: "qui",
  },
  {
    title: "et",
  },
];

const SearchSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading_wrapper}>
        Bio<span>Info</span>
      </h1>
      <div className={styles.search_container}>
        <Image src="/home/search-icon.svg" alt="search" />
        <div className="form__area">
          <Input type="text" name="search" placeholder="Search..." />
        </div>
      </div>
      <div className={styles.filter_container}>
        {filterTitle.map((data, idx) => {
          return (
            <div className={styles.filter_wrapper} key={idx}>
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchSection;
