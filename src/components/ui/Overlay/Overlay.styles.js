import styled from 'styled-components'

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);

  z-index: ${({ $zIndex }) => $zIndex || 100};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`
