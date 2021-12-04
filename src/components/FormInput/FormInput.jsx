import styled from 'styled-components';

export const FormInput = styled.input`
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  font-size: 16px;
  line-height: 1.714;
  color: var(--main-text-color);
  &:focus {
    outline-color: var(--accent-color);
  }
`;
