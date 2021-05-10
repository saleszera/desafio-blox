import styled, { css, keyframes } from 'styled-components';

interface GridActiveProps {
  isGridActive: boolean;
}

interface NextPageButtonProps {
  isLoading: boolean;
}

const fade = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Container = styled.div`
  padding: 2rem;
  background: var(--white);
  border-radius: 0.2rem;

  animation: ${fade} 0.5s ease-in-out;
`;

export const FilterTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 820px) {
    flex-direction: column-reverse;

    h2 {
      margin-top: 1rem;
    }
  }
`;

export const FilterTypeText = styled.h2`
  color: var(--black);
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;

  select {
    width: 20rem;
    background: var(--white);
    border: 0;
    border-bottom: 2px solid var(--gray);
    color: var(--gray);
    font-size: 1.125rem;
    padding: 0.5rem;
    margin-left: 1rem;
  }
`;

export const OrderButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border: none;
    border-radius: 0.2rem;
    margin-right: 0.5rem;
    width: 36px;

    svg {
      color: var(--gray);
    }
  }
  .active {
    background: var(--gray-100);

    svg {
      color: var(--blue);
    }
  }
`;

export const ItemContainer = styled.div<GridActiveProps>`
  display: grid;
  grid-gap: 2rem;
  justify-content: center;
  margin-top: 4rem;

  ${({ isGridActive }) => css`
    grid-template-columns: ${isGridActive
      ? 'repeat(auto-fit, 350px)'
      : 'repeat(1, auto)'};
  `};

  @media (max-width: 430px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NextPageButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const NextPageButton = styled.button<NextPageButtonProps>`
  flex: 1;
  max-width: 720px;
  /* min-width: 240px; */
  margin-top: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  border: 1px solid var(--blue);
  background: var(--blue-light);
  color: var(--white);
  transition: filter 0.9s;

  @media (max-width: 1850px) {
    & + button {
      margin-left: 0.5rem;
    }
  }

  &:disabled {
    cursor: not-allowed;
    ${({ isLoading }) => css`
      border: ${!isLoading && '1px solid var(--gray)'};
      background: ${!isLoading && 'var(--gray-light)'};
      color: ${!isLoading && 'var(--black);'};
    `}
  }

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;
