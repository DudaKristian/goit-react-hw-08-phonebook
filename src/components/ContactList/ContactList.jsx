import { useGetContactsQuery, useDeleteContactMutation } from 'features/phoneBookSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'features/filterSlice';


const ContactList = () => {
    
    const { data } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();

    const filter = useSelector(getFilter);
    
    const filterCheck = () =>
        data &&
        data.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    
    
    const contacts = filterCheck();

    return (
        <ul>
            {data && contacts.length > 0 &&
                contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name}
                    {contact.number}
                    <button
                        type="button" id={contact.id}
                        onClick={() => deleteContact(contact.id)}
                    >
                        Delete
                    </button>
            </li>))}
        </ul>
    )
}

export default ContactList
