import styled, { css } from 'styled-components'
import { FlexContainer } from '../../../../components/ui/FlexContainer/FlexContainer'
import { DefaultButton } from '../../../../components/ui/DefaultButton/DefaultButton'

export const SearchContainer = styled(FlexContainer)`
  width: 100%;
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
  width: 80%;
`

export const TextInputWrapper = styled.div`
  flex: 5;
  padding: 0 var(--space-m);
  border-radius: var(--radius-l) 0 0 var(--radius-l);
  display: flex;
  overflow: hidden;
  background-color: var(--vantrip-white);

  border: 2px solid var(--vantrip-secondary);

  color: var(--vantrip-secondary);

  &:has(input:focus) {
    background-color: var(--vantrip-lighter);

    &::placeholder {
      color: var(--vantrip-secondary);
    }
  }
`

export const TextInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-radius: var(--radius-l);

  text-align: center;

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

export const DateSplitWrapper = styled.div`
  flex: 3;
  display: flex;
  border-radius: 0;
  outline: none;
  text-align: center;
  border: 2px solid var(--vantrip-secondary);
  border-right: none;
  border-left: none;

  overflow: hidden;
`

export const DateButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  text-align: center;
  color: var(--vantrip-gray);
  border-radius: 0;

  padding: 0 var(--space-m);

  div {
    width: 100%;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: end;
  }

  div p {
    font-size: 1rem;
  }

  div span {
    flex: 1;
    font-size: 1rem;
    font-weight: 600;
  }

  &:focus {
    background-color: var(--vantrip-lighter);
    color: var(--vantrip-secondary);
  }

  &:active {
    transform: none;
  }
`

export const SubmitButton = styled(DefaultButton)`
  flex: 1;
  border-radius: 0 var(--radius-l) var(--radius-l) 0;
  transition: background-color 0.2s ease;
  border: 2px solid var(--vantrip-secondary);

  &:hover {
    background-color: var(--vantrip-secondary);
  }
`

export const ClearButton = styled(DefaultButton)`
  &:hover {
    text-decoration: none;
    font-weight: 600;
  }
`
