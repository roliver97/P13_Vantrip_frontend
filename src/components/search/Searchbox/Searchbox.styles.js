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

export const TextInput = styled.input`
  flex: 5;
  border-radius: var(--radius-l);
  outline: none;
  border: 2px solid var(--vantrip-secondary);
  text-align: center;
  color: var(--vantrip-secondary);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);

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
  border-radius: var(--radius-l);
  outline: none;
  text-align: center;
  border: 2px solid var(--vantrip-secondary);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);
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
  color: gray;
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
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);
  border-radius: var(--radius-l);
  border: 1px solid transparent;

  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--vantrip-secondary);
  }
`
