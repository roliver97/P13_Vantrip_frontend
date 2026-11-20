import styled from 'styled-components'

export const TitlesWrapper = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const FormContainer = styled.form`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--vantrip-white);
  flex: 1;
  padding: var(--space-s);
  border-radius: var(--radius-m);
  gap: var(--space-m);
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgb(239, 242, 247);
  border-radius: var(--radius-m);
  padding: var(--space-s);
  width: 100%;
  flex: 1;

  gap: var(--space-xs);

  label {
    background-color: var(--vantrip-lighter);
    color: var(--vantrip-dark);
    padding: var(--space-xs) var(--space-s);
    border-radius: var(--radius-s);
    font-weight: 600;
  }

  input {
    padding: var(--space-xs) var(--space-s);
    border: 1px solid var(--vantrip-gray);
    border-radius: var(--radius-s);
    outline: none;

    &:focus {
      outline: 2px solid var(--vantrip-light);
      border: 1px solid transparent;
    }
  }
`
