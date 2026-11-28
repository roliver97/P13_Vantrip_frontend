import styled from 'styled-components'
import { ErrorModal } from '../../../ui/ErrorModal/ErrorModal'
import { DefaultButton } from '../../../ui/DefaultButton/DefaultButton'

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: var(--space-l) 0;

  flex: 1;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: var(--space-m);
  flex: 1;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);

  input {
    border: 1px solid var(--vantrip-primary);
    padding: var(--space-xs);

    &:focus {
      outline: 2px solid var(--vantrip-lighter);
    }
  }
`

export const ErrorForm = styled(ErrorModal)`
  p {
    color: red;
    font-size: 1rem;
    font-weight: 400;
  }
`

export const SubmitBtn = styled(DefaultButton)`
  margin-top: var(--space-l);
`
