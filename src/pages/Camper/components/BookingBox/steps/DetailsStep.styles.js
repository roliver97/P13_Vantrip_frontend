import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  flex: 1;
  background-color: var(--vantrip-primary);
  gap: var(--space-xl);

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);

  label {
    font-weight: 500;
  }

  input {
    padding: var(--space-xs) var(--space-s);
    border: 1px solid var(--vantrip-dark);
    border-radius: var(--radius-s);
    outline: none;
    transition: all 0.7s ease;

    &:focus {
      border: 1px solid var(--vantrip-light);
    }
  }
`
