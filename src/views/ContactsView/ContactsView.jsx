import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function ContactsView () {
   return(
    <div>
          <ContactForm />
          <Filter title="Find contact" />
          <ContactList />
    </div>
   )
}