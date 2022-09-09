import { useState } from "react";
import { useCreateContactMutation, useGetContactsQuery} from "features/phoneBookAPI";
import styles from "./newContact.module.css"


const NewContact = () => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const { data } = useGetContactsQuery();
    const [addContact] = useCreateContactMutation();
    
    const onInputChange = e => {
        
        const { name, value } = e.target
        
        switch (name) {
            case "name":
                setName(value)
                break;
            case "number":
                setNumber(value)
                break;
            default:
                return;
        }    
    }
    
    const addContacts = input => {
        const contactName =
            data.map(contact =>
                contact.name.toLowerCase())

        if (!contactName.includes(input.name.toLowerCase())) {
            addContact(input)

            setName("")
            setNumber("")

        } else {
            return alert(`${input.name} is allready in contacts`)
        } 
    };
    
    const onSubmitHandle = e => {

    e.preventDefault();
        
    const contact = {
    name: name,
    number: number,
    
    }
    
    addContacts(contact)

    };

    return (
        <div className={styles.newContact__wrapper}>
            <h2 className={styles.newContact__title}> + Add new contact</h2> 
            
            <form  onSubmit={onSubmitHandle}>
                <label htmlFor="">
                    <input
                        type="text"
                        className={styles.newContact__input}
                        placeholder="Contact name"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={onInputChange}
                        />
                </label>
                <label htmlFor="">
                    <input
                        type="tel"
                        className={styles.newContact__input}
                        placeholder="Phone number"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={onInputChange}
                        />
                </label>
                <button
                    type="submit"
                    className={styles.newContact__button}
                >Add contact</button>
            </form>    
        </div>
        )       
    }


export default NewContact


