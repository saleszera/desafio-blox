import React from 'react';
import { FiCheck } from 'react-icons/fi';

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

export const Card: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <p>Data limite</p>
          <h2 id="title">09/03/2021</h2>
        </div>
        <FiCheck size={24} />
      </Header>
      <Main>
        <ItemType>
          <img
            src="data:image/png;base64,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"
            alt="teste"
          />

          <Details>
            <IDContainer>
              <span>ID</span>
              <p>2714</p>
            </IDContainer>
            <ModalityContainer>
              <span>Modalidade</span>
              <p>EAD</p>
            </ModalityContainer>
          </Details>
        </ItemType>

        <strong>Competencia de liderança motivacional</strong>
      </Main>
      <Footer>
        <p>Responsável</p>
      </Footer>
    </Container>
  );
};
