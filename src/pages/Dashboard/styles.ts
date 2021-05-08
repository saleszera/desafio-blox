import styled, { css } from 'styled-components';

interface GridActiveProps {
  isGridActive: boolean;
}

interface InputActiveProps {
  isInputActive: boolean;
}

interface SelectActive {
  isSelectActive: boolean;
}

interface NextPageButtonProps {
  isLoading: boolean;
}

export const Container = styled.div`
  padding: 2rem;
  background: var(--white);
  border-radius: 0.2rem;
`;

export const FilterTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterTypeText = styled.h2`
  color: var(--black);
`;
export const FilterContainer = styled.div<SelectActive>`
  display: flex;
  flex-direction: row;

  select {
    height: 2.5rem;
    width: 20rem;
    background: var(--white);
    border: 0;
    color: var(--gray);
    font-size: 1.125rem;
    padding: 0.5rem;
    margin-left: 1rem;

    ${({ isSelectActive }) => css`
      border-bottom: ${isSelectActive
        ? '1px solid var(--blue)'
        : '1px solid var(--gray)'};
    `}
  }
`;
export const FilterInputContainer = styled.div<InputActiveProps>`
  margin-right: 0.5rem;
  background: var(--white);
  color: var(--gray);
  transition: border-bottom 0.9s, color 0.9s;
  border-bottom: 1px solid var(--gray);

  ${({ isInputActive }) => css`
    border-bottom: ${isInputActive
      ? '1px solid var(--blue)'
      : '1px solid var(--gray)'};

    svg {
      color: ${isInputActive ? 'var(--blue)' : 'var(--gray)'};
    }
  `}

  input {
    border: none;
  }

  &:hover {
    border-bottom: 1px solid var(--blue);

    svg {
      color: var(--blue);
    }
  }
`;

export const ItemsOrderContainer = styled.div`
  display: flex;

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
    background: #f8f8f8;

    svg {
      color: var(--blue);
    }
  }
`;

export const ItemContainer = styled.div<GridActiveProps>`
  margin-top: 4rem;
  display: grid;
  grid-gap: 2rem;
  justify-content: center;

  ${({ isGridActive }) => css`
    grid-template-columns: ${isGridActive
      ? 'repeat(auto-fit, 350px)'
      : 'repeat(1, auto)'};
  `};
`;

export const NextPageButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 0.5rem;
`;
export const NextPageButton = styled.button<NextPageButtonProps>`
  flex: 1;
  max-width: 720px;
  min-width: 240px;
  margin-top: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  border: 1px solid var(--blue);
  background: var(--blue-light);
  color: var(--white);
  transition: filter 0.9s;

  & + button {
    margin-left: 0.5rem;
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
