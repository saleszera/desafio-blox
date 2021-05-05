import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--blue);
  padding: 2rem;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;

  @media (max-width: 622px) {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
    }
  }
`;
