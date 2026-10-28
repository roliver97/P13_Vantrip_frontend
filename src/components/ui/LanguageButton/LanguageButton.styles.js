import styled from 'styled-components'

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--vantrip-color-white);
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--vantrip-color-white);
  }

  span {
    display: flex;
    align-items: center;
  }
`
