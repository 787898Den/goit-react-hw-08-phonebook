import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from './ContactsView.styled';

export default function ContactsView () {
      const dispatch = useDispatch();
      const contacts = useSelector(getContacts);
    
      useEffect(() => {
        const fetchContacts = async () => {
          dispatch(contactsOperations.fetchContacts());
        };
        fetchContacts();
      }, [dispatch]);
      return (
        <>
          <ContactForm />
          {contacts.length !== 0 ? (
            <>
              <Filter title="Find contact" />
              <ContactList />
            </>
          ) : (
            <Title> 
              You haven't contacts
            </Title>
          )}
        </>
      );
}