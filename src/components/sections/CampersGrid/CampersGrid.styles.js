import styled from 'styled-components'

export const GridSection = styled.section`
  background: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: var(--space-xxl);
  min-height: calc(100svh - 62px);
  scroll-margin-top: 62px;
`

export const Grid = styled.div`
  display: grid;
  padding: var(--space-m);
  grid-template-columns: repeat(auto-fit, 300px);

  gap: var(--space-l);
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

  justify-content: center;
`
