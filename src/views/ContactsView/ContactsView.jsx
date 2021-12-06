import { Container, SectionTitle } from 'components';
import { AddContactForm, ContactsFilter } from 'views/ContactsView/components';
import { ContactsList } from 'views/ContactsView/components/ContactsList/ContactsList';

function ContactsView() {
  return (
    <Container>
      <SectionTitle>Your Contacts</SectionTitle>
      <AddContactForm />
      <ContactsFilter />
      <ContactsList />
    </Container>
  );
}

export default ContactsView;
