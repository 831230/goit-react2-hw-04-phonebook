import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = event => {
    event.preventDefault();
    const valueName = event.currentTarget.elements.name.value;
    const valueNumber = event.currentTarget.elements.number.value;
    let newContact;
    if (contacts.some(element => element.name === valueName)) {
      return Notiflix.Notify.warning(`${valueName} is already in contacts`);
    } else {
      newContact = {
        name: valueName,
        number: valueNumber,
        id: nanoid(),
      };
    }
    setContacts([...contacts, newContact]);
    resetForm(event);
  };

  const addCurrentValue = event => {
    const value = event.target.value;
    setFilter(value);
  };

  const resetForm = event => {
    event.target.name.value = '';
    event.target.number.value = '';
    setFilter('');
  };

  const filterContacts = () => {
    const filteredArray = [];
    contacts.filter(element => {
      if (element.name.includes(filter)) {
        filteredArray.push(element);
      }
      return filteredArray;
    });
    return filteredArray;
  };

  const deleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <ErrorBoundary>
          <ContactForm
            nameTitle="Name"
            numberTitle="Number"
            addContact={addContact}
          />
        </ErrorBoundary>

        <h2>Contacts</h2>
        <ErrorBoundary>
          <Filter
            filterTitle={'Finds contacts by name'}
            inputFilterValue={filter}
            addCurrentValue={addCurrentValue}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <ContactList names={filterContacts()} btnAction={deleteContact} />
        </ErrorBoundary>
      </Section>
    </>
  );
};

// useEffect(()=>{
//   console.log(JSON.parse(localStorage.getItem('contacts')));
//   setContacts(JSON.parse(localStorage.getItem('contacts')));
//   // console.log(contacts);
// },[])

// useEffect(()=>{
//   let contactsWithStorage;
//   if(contacts.length>JSON.parse(localStorage.getItem('contacts')).length){
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//     contactsWithStorage = JSON.parse(localStorage.getItem('contacts'));
//   }else{
//     contactsWithStorage = contacts;
//     console.log("dupa", contactsWithStorage);
//     // console.log(contactsWithStorage);
//   }

//   setContacts(contactsWithStorage)
//   // localStorage.setItem('contacts', JSON.stringify([...contacts,...JSON.parse(localStorage.getItem('contacts'))]));

//   // console.log(JSON.parse(localStorage.getItem('contacts')));
// },[contacts])

// const saveContactsToStorage = () => {
//   try {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getContactWithStorage = () => {
//   let newContacts;
//   try {
//     const contactsWithStorage = JSON.parse(localStorage.getItem('contacts'));
//     // setContacts(contactsWithStorage)
//     if (contactsWithStorage) {
//       newContacts = contactsWithStorage
//     }
//     console.log(contactsWithStorage);

//   } catch (error) {
//     console.log(error);
//   }
//   setContacts(newContacts)
// }

// useEffect(()=>{

//   getContactWithStorage();
//   console.log("getContactWithStorage", contacts);
// },[])

// useEffect(()=>{

//   // saveContactsToStorage()
//   try {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   } catch (error) {
//     console.log(error);
//   }
//   console.log("saveContactsToStorage", contacts);
// },[contacts])

export default App;
