import shortId from "shortid"
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from "features/filterSlice";
import styles from "./Filter.module.css";


const Filter = () => {
    

    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    
    const filterInputId = shortId.generate();

    const onChange = e => {
        dispatch(setFilter(e.target.value.trim()))
    }
    
    return (
        <div className={styles.filter__wrapper}>
            <label
            htmlFor={filterInputId}
            className = {styles.filter}
        >
            <input type="text"
                name="filter"
                id={filterInputId}
                onChange={onChange}
                value={filter}
                placeholder = "Find contact by name"
                className ={styles.filter__input}
                />
        </label>
        </div>
    )
}



export default Filter