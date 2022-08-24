import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Phonebook from "./Phonebook/Phonebook";

const App = () => {

return (
      <div>
        <h1>Phonebook</h1>
        <Phonebook />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
}

export default App