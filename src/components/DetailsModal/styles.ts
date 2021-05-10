import styled, { css } from 'styled-components';

interface BackgroundColorProps {
  color?: string;
}

export const Header = styled.header<BackgroundColorProps>`
  display: flex;
  align-items: center;

  border-radius: 0.2rem 0.2rem 0 0;
  padding: 2rem;

  ${({ color }) => css`
    background: ${color};
  `}

  h1 {
    margin-left: 20rem;
  }
`;
export const Modalities = styled.div`
  display: flex;
  justify-content: space-around;
  background: var(--gray-100);
  padding: 4rem 1rem;

  h1 {
    color: var(--gray);
    text-align: left;
  }

  h2 {
    color: var(--gray-light);
    text-align: left;
  }

  .hexagon-position {
    bottom: 102px;
  }
`;

export const ModalityContainer = styled.div``;
export const WorkloadContainer = styled.div`
  &:before {
    content: '';
    position: absolute;

    right: 35%;
    width: 0;
    height: 100px;
    border-left: 2px solid var(--gray);
  }
`;
export const Section = styled.footer`
  display: flex;
  justify-content: space-around;

  background: var(--gray-100);
  padding: 4rem 1rem;
  border-radius: 0 0 0.2rem 0.2rem;

  h2 {
    color: var(--black);
  }

  p {
    color: var(--gray);
  }
`;
export const Areas = styled.div`
  p {
    margin-left: 1rem;
  }
`;
export const KnowledgeArea = styled.div`
  margin: 2rem 0;
  div {
    display: flex;
    align-items: center;
  }
`;
export const FunctionalArea = styled.div<BackgroundColorProps>`
  div {
    display: flex;
    align-items: center;

    margin-top: 5px;

    ${({ color }) => css`
      svg {
        color: ${color};
      }
    `}
  }
`;
export const OtherThings = styled.div`
  margin: 2rem 0;

  p {
    margin-top: 5px;
  }
`;
export const Profile = styled.div``;
export const Competencies = styled.div<BackgroundColorProps>`
  margin: 2rem 0;

  p {
    color: var(--white);
    padding: 0.2rem;
    border-radius: 0.5rem;
    text-align: center;

    ${({ color }) => css`
      background: ${color};
    `}
  }
`;
