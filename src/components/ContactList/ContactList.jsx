import { useGetContactsQuery, useDeleteContactMutation } from 'features/phoneBookAPI';
import { useSelector } from 'react-redux';
import { getFilter } from 'features/filterSlice';
import styles from "./contactList.module.css";
import edit from "../../images/edit.png";
import remove from "../../images/delete.png";

const ContactList = () => {
    
    const { data } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();

    console.log(data)

    const filter = useSelector(getFilter);
    
    const filterCheck = () =>
        data &&
        data.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    
    
    const contacts = filterCheck();

    return (
        <>
            {contacts ? 
                <p className={styles.contacts__counter}>View {contacts.length} of {data.length}</p>
                :
                <p>You have no cuntacts yet</p>
        }
        
        
        <ul className = {styles.contacts__list}>
            {data && contacts.length > 0 &&
                contacts.map(contact => (
                <li key={contact.id} className = {styles.contacts__item}>
                    <div className = {styles.contacts__contact}>
                        <span className={styles.contacts__name}
                        >{contact.name}</span>
                        <div className={styles.contacts__stick}></div>
                        <span className={styles.contacts__nuber}
                        >{contact.number}</span>
                    </div>
                    <div className={styles.contacts__btns}>
                        <button
                            className={styles.contacts__btn}
                            type="button"
                            id={contact.id}
                            onClick={() => deleteContact(contact.id)}
                        >
                        <img src={edit} alt="edit" width="24px" height="24px"/>
                        </button>
                            <button
                            className={styles.contacts__btn}
                            type="button"
                            id={contact.id}
                            onClick={() => deleteContact(contact.id)}
                        >
                            <img src={remove} alt="edit" width="24px" height="24px"/>
                        </button>        
                    </div>
            </li>))}
        </ul>
        </>
    )
}

export default ContactList
