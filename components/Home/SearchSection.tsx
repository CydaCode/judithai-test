import React, { Dispatch } from "react";
import styles from "../../styles/Home/Search.module.css";
import { Input, Image } from "@chakra-ui/react";
import Cards from "./Cards";

const SearchSection = ({
  setFilter,
  handleSearch,
  searchTerm,
}: {
  setFilter: Dispatch<React.SetStateAction<string>>;
  handleSearch:  (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}) => {
  return (
    <>
      {/* search component */}
      <div className={styles.search_container}>
        <h1 className={styles.search_heading_wrapper}>
          Bio<span>Info</span>
        </h1>
        <div className={styles.search_containers}>
          <Image src="/home/search-icon.svg" alt="search" />
          <div className="form__area">
            <Input
              type="text"
              name="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className={styles.filter_containers}>
          <div className={styles.filter_wrappers}>
            <p onClick={() => setFilter("all")}>All</p>
          </div>
          <div className={styles.filter_wrappers}>
            <p onClick={() => setFilter("info")}>Info</p>
          </div>
          <div className={styles.filter_wrappers}>
            <p onClick={() => setFilter("org")}>Org</p>
          </div>
          <div className={styles.filter_wrappers}>
            <p onClick={() => setFilter("com")}>Com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
