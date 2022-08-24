import shortId from "shortid"
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from "features/filterSlice";
// import {  useGetContactsQuery } from "features/phoneBookSlice";
// useFilterContactsByNameQuery

const Filter = () => {
    
    // const { data } = useGetContactsQuery();

    // let result = [];

    // const onChange = e => {
    //     const normalizedContact = e.target.value;
    //     for (const contact of data){
    //         if (contact.name.toLowerCase().includes(normalizedContact)) {
    //             result.push(contact.id);
    //             return result
    //         }
    //     }
    // }
    
    // const {data: filter} = useFilterContactsByNameQuery(() => onChange())

    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    
    const filterInputId = shortId.generate();

    const onChange = e => {
        dispatch(setFilter(e.target.value.trim()))
        // console.log(e.target.value)
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