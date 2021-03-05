import { useState } from "react";
import styles from "../../styles/Components/Search.module.css";
import { FaSearch } from 'react-icons/fa';

function Input() {
  const [search, setSearch] = useState("");

  function handleSearch() {
    if (search === "") {
      alert("É necessário digitar algo no campo de busca");
    }
  }

  return (
    <>
      <div className={styles.inputBox}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Do que você está precisando?"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={handleSearch}>
         <FaSearch size={25} />
        </button>
      </div>
    </>
  );
}

export default Input;
