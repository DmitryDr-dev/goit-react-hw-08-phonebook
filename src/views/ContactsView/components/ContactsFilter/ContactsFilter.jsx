import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { FormField, FormInput, FormInputLabel } from 'components';

export function ContactsFilter() {
  const filterInputId = uuidv4();
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <FormField>
        <FormInputLabel htmlFor={filterInputId}>Search</FormInputLabel>
        <FormInput
          type="text"
          id={filterInputId}
          value={filterValue}
          onChange={e => dispatch(changeFilter(e.target.value))}
          placeholder="Enter your query..."
        />
      </FormField>
    </>
  );
}
