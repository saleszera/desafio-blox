import styled from 'styled-components';

export const Container = styled.div`
  background: var(--blue);

  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (max-width: 760px) {
    text-align: center;
  }
`;
