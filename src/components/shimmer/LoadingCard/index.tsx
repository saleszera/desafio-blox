import React from 'react';

import Skeleton from '../../Skeleton';

import {
  Container,
  Header,
  Main,
  ItemType,
  Details,
  IDContainer,
  ModalityContainer,
  Footer,
} from './styles';

export const LoadingCard: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <div>
            <Skeleton className="skeleton-header-span" />
            <Skeleton className="skeleton-header-title" />
          </div>
          <Skeleton className="skeleton-header-icon" />
        </Header>
        <Main>
          <ItemType>
            <Skeleton className="skeleton-main-img" />

            <Details>
              <IDContainer>
                <Skeleton className="skeleton-main-span" />
              </IDContainer>
              <ModalityContainer>
                <Skeleton className="skeleton-main-span" />
              </ModalityContainer>
            </Details>
          </ItemType>

          <Skeleton className="skeleton-main-title" />
        </Main>
        <Footer>
          <Skeleton className="skeleton-footer-span" />
        </Footer>
      </Container>

      <Container>
        <Header>
          <div>
            <Skeleton className="skeleton-header-span" />
            <Skeleton className="skeleton-header-title" />
          </div>
          <Skeleton className="skeleton-header-icon" />
        </Header>
        <Main>
          <ItemType>
            <Skeleton className="skeleton-main-img" />

            <Details>
              <IDContainer>
                <Skeleton className="skeleton-main-span" />
              </IDContainer>
              <ModalityContainer>
                <Skeleton className="skeleton-main-span" />
              </ModalityContainer>
            </Details>
          </ItemType>

          <Skeleton className="skeleton-main-title" />
        </Main>
        <Footer>
          <Skeleton className="skeleton-footer-span" />
        </Footer>
      </Container>

      <Container>
        <Header>
          <div>
            <Skeleton className="skeleton-header-span" />
            <Skeleton className="skeleton-header-title" />
          </div>
          <Skeleton className="skeleton-header-icon" />
        </Header>
        <Main>
          <ItemType>
            <Skeleton className="skeleton-main-img" />

            <Details>
              <IDContainer>
                <Skeleton className="skeleton-main-span" />
              </IDContainer>
              <ModalityContainer>
                <Skeleton className="skeleton-main-span" />
              </ModalityContainer>
            </Details>
          </ItemType>

          <Skeleton className="skeleton-main-title" />
        </Main>
        <Footer>
          <Skeleton className="skeleton-footer-span" />
        </Footer>
      </Container>
    </>
  );
};
