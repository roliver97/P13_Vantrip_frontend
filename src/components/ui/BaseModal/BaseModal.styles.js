import styled from 'styled-components'

export const ModalContainer = styled.div`
  background-color: #ffffff;
  color: var(--vantrip-dark);
  width: 90%;
  max-width: 480px;
  border-radius: 16px;
  padding: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  transform: translate(-50%, -50%)
    ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0.95)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease,
    visibility 0.3s ease;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--vantrip-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: #000000;
  }
`

export const ModalHeader = styled.div`
  margin-bottom: 16px;
  text-align: center;

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--vantrip-primary);
    margin: 0;
  }
`

export const ModalContent = styled.div``
