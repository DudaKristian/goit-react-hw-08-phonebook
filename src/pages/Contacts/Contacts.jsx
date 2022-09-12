import { lazy } from 'react';
import styles from "./Contacts.module.css"
import girl from '../../images/bggirl.png'
import boy from '../../images/bgboy.png'


const Filter = lazy(() => import("../../components/Filter/Filter"));
const ContactList = lazy(() => import("../../components/ContactList/ContactList"));
const NewContact = lazy(() => import("../../components/newContact/newContact"));


const Contacts = () => {
    return (
        <div className={styles.contacts__background}>
            <img src={girl} alt="girl" className={styles.contacts__girl} />
            <img src={boy} alt="boy" className={styles.contacts__boy} />
            <div className={styles.contacts__wrapper}>
                <div>
                    <Filter />
                    <ContactList />
                </div>
                <NewContact />
            </div>
        </div>
    )
}

export default Contacts



