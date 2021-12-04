import { Container } from 'components';
import { AddContactForm, ContactsFilter } from 'views/ContactsView/components';
import { ContactsList } from 'views/ContactsView/components/ContactsList/ContactsList';

export function ContactsView() {
  return (
    <Container>
      <h2>Your Contacts</h2>
      <AddContactForm />
      <ContactsFilter />
      <ContactsList />
    </Container>
  );
}
