import styled, { css, keyframes } from 'styled-components';

interface CardsProps {
  color1?: string;
  color2?: string;
}

const floatingCard = keyframes`
    to{
      transform: scale(1.0.5);
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 10.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 50px 80px rgba(0, 0, 0, 0.12);
  }
`;

export const Container = styled.div`
  &:hover {
    animation: ${floatingCard} 0.9s ease-in-out forwards;
  }
`;
export const Header = styled.header<CardsProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 2rem;
  border-radius: 0.2rem 0.2rem 0 0;
  ${({ color1 }) => css`
    background: ${color1};
  `}
`;
export const Main = styled.main<CardsProps>`
  display: flex;
  align-items: center;

  padding: 0.5rem 2rem;
  height: 200px;

  ${({ color2 }) => css`
    background: ${color2};
  `}

  strong {
    padding: 2rem;
    text-align: center;
  }
`;

export const ItemType = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;

  img {
    width: 7rem;
    height: 6rem;
    border-radius: 20rem;
  }
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
export const IDContainer = styled.div`
  margin-right: 1rem;
  text-align: center;
`;
export const ModalityContainer = styled.div`
  text-align: center;
`;
export const Footer = styled.footer<CardsProps>`
  padding: 0.5rem 2rem;
  border-radius: 0 0 0.2rem 0.2rem;
  text-align: center;
  height: 60px;

  ${({ color1 }) => css`
    background: ${color1};
  `}
`;
