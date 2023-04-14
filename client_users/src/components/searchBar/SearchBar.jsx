import React,{ useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { getProductByName, getAllProducts } from "../../redux/actions";
import styles from "./SearchBar.module.css";
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInput(e);
        
    if (e !== "") {
      history.push("/home");
      dispatch(getProductByName(input));
    } else {
      history.goBack()
      dispatch(getAllProducts());
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={input}
        onChange={(e) => handleChange(e.target.value.trim())}
        type="text"
        required=""
        placeholder="Buscar Ofertas..."
      />
      <button type="submit" className={styles.button}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
