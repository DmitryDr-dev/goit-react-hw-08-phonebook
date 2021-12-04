import PropTypes from 'prop-types';
// import styles from './ContactsListItem.module.css';
import styled from 'styled-components';
import { DeleteButton } from 'components';

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

export function ContactsListItem({ name, number, onDelete }) {
  return (
    <ContactWrap>
      <span>
        <ContactName>{name}: </ContactName>
        <ContactNumber>{number}</ContactNumber>
      </span>
      <DeleteButton type="button" onClick={onDelete}>
        Delete
      </DeleteButton>
    </ContactWrap>
  );
}

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
