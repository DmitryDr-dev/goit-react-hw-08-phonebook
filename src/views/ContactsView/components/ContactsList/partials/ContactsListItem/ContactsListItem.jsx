import { useState } from 'react';
import PropTypes from 'prop-types';
// import styles from './ContactsListItem.module.css';
import styled from 'styled-components';
import { Button, DeleteButton, Modal } from 'components';
import { ContactEditor } from 'views/ContactsView/components';

const ContactWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactInfo = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const ContactName = styled(ContactInfo)`
  margin-right: 15px;
`;

const ContactNumber = styled(ContactInfo)``;

const ButtonGroup = styled.span`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`;
export function ContactsListItem({ name, number, onDelete, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(state => !state);

  return (
    <>
      <ContactWrap>
        <span>
          <ContactName>{name}: </ContactName>
          <ContactNumber>{number}</ContactNumber>
        </span>
        <ButtonGroup>
          <Button onClick={toggleModal}>Edit</Button>

          <DeleteButton type="button" onClick={onDelete}>
            Delete
          </DeleteButton>
        </ButtonGroup>
      </ContactWrap>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactEditor id={id} onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
