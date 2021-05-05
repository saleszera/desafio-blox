import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background: var(--white);
`;

export const FilterTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterTypeText = styled.h2`
  color: var(--black);
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;

  select {
    height: 2.5rem;
    width: 20rem;
    background: var(--white);
    border: 0;
    border-bottom: 1px solid var(--gray);
    color: var(--gray);
    font-size: 1.125rem;
    padding: 0.5rem;
  }
`;
export const FilterInputContainer = styled.div`
  margin-right: 0.5rem;
  background: var(--white);
  color: var(--gray);
  border-bottom: 1px solid var(--gray);
  transition: border-bottom 0.9s, color 0.9s;

  &:hover {
    border-bottom: 1px solid var(--blue);

    svg {
      color: var(--blue);
    }
  }

  input {
    border: none;
  }

  svg {
    color: var(--gray);
  }
`;

export const ItemsOrderContainer = styled.div`
  display: flex;
`;

export const ItemsOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border: none;
  border-radius: 0.2rem;
  margin-right: 0.5rem;
  width: 36px;
  transition: filter 0.9s, color 0.9s;

  svg {
    color: var(--gray);
  }

  &:active {
    filter: brightness(0.9);

    svg {
      color: var(--blue);
    }
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 1rem;
  justify-content: center;
`;
