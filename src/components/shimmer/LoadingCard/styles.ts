import styled from 'styled-components';

export const Container = styled.div`
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  border-radius: 0.2rem;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 2rem;
  border-radius: 0.2rem 0.2rem 0 0;
  background: #f8f8f8;
  /* height: 200px; */

  div {
    .skeleton-header-span {
      height: 1rem;
      width: 4rem;
    }

    .skeleton-header-title {
      height: 1.2rem;
      width: 8rem;

      margin: 0.5rem 0;
    }
  }

  .skeleton-header-icon {
    height: 2rem;
    width: 2rem;
    border-radius: 5rem;
  }
`;
export const Main = styled.main`
  display: flex;
  align-items: center;

  padding: 5rem 2rem;
  height: 11rem;

  .skeleton-main-title {
    height: 1.5rem;
    width: 10rem;
  }
`;

export const ItemType = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;

  .skeleton-main-img {
    height: 5rem;
    width: 5rem;
    border-radius: 5rem;
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

  .skeleton-main-span {
    height: 1rem;
    width: 2rem;
  }
`;
export const ModalityContainer = styled.div`
  text-align: center;

  .skeleton-main-span {
    height: 1rem;
    width: 2rem;
  }
`;
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  border-radius: 0 0 0.2rem 0.2rem;
  text-align: center;
  height: 5rem;
  background: var(--gray-100);

  .skeleton-footer-span {
    height: 1rem;
    width: 6rem;
  }
`;
