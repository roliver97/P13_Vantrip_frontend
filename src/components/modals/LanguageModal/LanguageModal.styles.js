import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-xl);
  align-items: center;
  padding: var(--space-l) 0;

  div {
    gap: var(--space-s);
  }

  select {
    padding: var(--space-xs);
    background-color: white;
    border: 1px solid var(--vantrip-light);

    &:active,
    &:focus {
      background-color: var(--vantrip-lighter);
      outline: none;
    }
  }
`

export const ApplyButton = styled.button``
