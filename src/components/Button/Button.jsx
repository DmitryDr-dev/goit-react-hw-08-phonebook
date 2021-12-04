import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-weight: 700;
  font-size: 16px;
  color: var(--dark-bg-text-color);
  background-color: var(--accent-color);
  cursor: pointer;
`;

export const DeleteButton = styled(Button)`
  background-color: var(--secondary-accent-color);
`;

export const LogoutButton = styled(Button)`
  padding: 8px 12px;
  font-size: 14px;
`;
