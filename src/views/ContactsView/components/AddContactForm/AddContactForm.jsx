import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getContacts } from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';
import { FormField, FormInput, FormInputLabel, Button, Form } from 'components';

export function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onAddNewContact = newContact =>
    dispatch(contactsOperations.addNewContact(newContact));

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const checkForDuplicatedContacts = (allContacts, newContact) => {
    const normalizedContact = newContact.name.toLowerCase();

    if (
      allContacts.find(
        contact => contact.name.toLowerCase() === normalizedContact,
      )
    ) {
      return alert(`${newContact.name} already exists!`);
    }

    onAddNewContact(newContact);
    clearInput();
  };

  const handleInputChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    checkForDuplicatedContacts(contacts, newContact);
  };

  const clearInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <FormInputLabel htmlFor={nameInputId}>Name</FormInputLabel>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={nameInputId}
          value={name}
          onChange={handleInputChange}
        />
      </FormField>

      <FormField>
        <FormInputLabel htmlFor={numberInputId}>Number</FormInputLabel>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={numberInputId}
          value={number}
          onChange={handleInputChange}
        />
      </FormField>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}
