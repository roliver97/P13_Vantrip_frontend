import styled, { css } from 'styled-components'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'
import { DefaultButton } from '../../ui/DefaultButton/DefaultButton'

export const SearchContainer = styled(FlexContainer)`
  width: 80%;
  z-index: 100;

  ${({ $isSticky }) =>
    $isSticky
      ? css`
          position: fixed;
          top: 72px;
        `
      : css`
          position: absolute;
          top: 50svh;
          transform: translateY(-50%);
          background: transparent;
        `}
`

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  gap: var(--space-s);
`

export const SearchInputsWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-wrap: wrap;
  border-radius: var(--radius-l);
  outline: none;
  text-align: center;
  border: 2px solid var(--vantrip-secondary);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);
`

export const TextInput = styled.input`
  flex: 2;
  border-radius: var(--radius-l) 0 0 var(--radius-l);
  outline: none;
  border: none;
  border-right: 2px solid var(--vantrip-secondary);
  text-align: center;
  color: var(--vantrip-secondary);

  &:focus {
    background-color: var(--vantrip-lighter);

    &::placeholder {
      color: var(--vantrip-secondary);
    }
  }

  &::placeholder {
    font-size: 0.9rem;
  }
  &::-webkit-input-placeholder {
    font-size: 0.9rem;
  }
  &::-moz-placeholder {
    font-size: 0.9rem;
  }
  &:-ms-input-placeholder {
    font-size: 0.9rem;
  }
`

export const CheckInInput = styled.input`
  flex: 1;

  border-radius: 0;
  outline: none;
  border: none;
  border-right: 2px solid var(--vantrip-secondary);
  text-align: center;
  color: gray;

  &:focus {
    background-color: var(--vantrip-lighter);
    color: var(--vantrip-secondary);

    &::placeholder {
      color: var(--vantrip-secondary);
    }
  }
`
export const CheckOutInput = styled.input`
  flex: 1;

  border-radius: 0 var(--radius-l) var(--radius-l) 0;
  outline: none;
  border: none;
  text-align: center;
  color: gray;

  &:focus {
    background-color: var(--vantrip-lighter);
    color: var(--vantrip-secondary);

    &::placeholder {
      color: var(--vantrip-secondary);
    }
  }
`

export const SubmitButton = styled(DefaultButton)`
  flex: 1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);
  border-radius: var(--radius-l);
`
