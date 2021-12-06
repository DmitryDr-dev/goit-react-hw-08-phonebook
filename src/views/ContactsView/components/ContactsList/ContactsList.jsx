import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
// import styles from './ContactsList.module.css';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';
import { ContactsListItem } from './partials/ContactsListItem/ContactsListItem';
import { SectionTitle, Modal } from 'components';
// import { ContactEditor } from 'views/ContactsView/components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
`;

export function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {contacts.length > 0 ? (
        <List>
          {contacts.map(({ id, name, number }) => {
            return (
              <ListItem key={id}>
                <ContactsListItem
                  name={name}
                  number={number}
                  id={id}
                  onDelete={() => onDeleteContact(id)}
                />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <SectionTitle>Here will be displayed your contacts</SectionTitle>
      )}
    </>
  );
}
