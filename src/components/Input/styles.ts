import styled, { css } from 'styled-components';

interface ContainerPops {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerPops>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  background: var(--white);
  color: var(--gray);
  transition: border-bottom 0.9s, color 0.9s;
  border-bottom: 2px solid var(--gray);

  input {
    width: 100%;
    border: none;
  }

  ${props =>
    props.isFocused &&
    css`
      border-bottom: 2px solid var(--blue);

      svg {
        color: var(--blue);
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      border-bottom: 2px solid var(--blue);

      svg {
        display: inline;
        color: var(--blue);
      }
    `}


  &:hover {
    border-bottom: 2px solid var(--blue);

    svg {
      color: var(--blue);
    }
  }
`;
