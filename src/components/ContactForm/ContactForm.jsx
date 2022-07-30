
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { Container,Input,Label,Form,Title, Button } from './ContactForm.styled';


export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!isContact) {
      dispatch(contactsOperations.addContact({ name, number: phone }));
      reset();
      return;
    }
    alert(`${name} is already in contact`);
  };

  const reset = () => {
    setName('');
    setPhone('');
  };;

 

  return (
    <Form action="submit" onSubmit={handleSubmit}>
      <Container >
        <Label>
          <Title >Name</Title>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </Label>
        <Label >
          <Title >Number</Title>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleInputChange}
          />
        </Label>
        <Button type="submit">
          Add contact
        </Button>
      </Container>
    </Form>
  );
}