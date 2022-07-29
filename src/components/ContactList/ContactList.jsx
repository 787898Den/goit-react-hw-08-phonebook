import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/operations';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from './ContactItem';
import s from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={id => dispatch(contactsOperations.deleteContact(id))}
          />
        );
      })}
    </ul>
  );
};