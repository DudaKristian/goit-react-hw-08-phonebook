import shortId from "shortid"
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from "features/filterSlice";


const Filter = () => {
    

    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    
    const filterInputId = shortId.generate();

    const onChange = e => {
        dispatch(setFilter(e.target.value.trim()))
    }
    
    return (
        <label htmlFor={filterInputId}>
            Find contacts by name <br />
            <input type="text"
                name="filter"
                id={filterInputId}
                onChange={onChange}
                value = {filter}
                />
        </label>
    )
}



export default Filter