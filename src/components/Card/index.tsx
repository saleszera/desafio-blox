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

interface Responsibles {
  name: string;
}

interface Bloxe {
  date_limit_edition: string;
  title: string;
  blox_profile: {
    id: number;
  };
  modality: string;
  knowledge_area: {
    color1: string;
    color2: string;
    icon_url: string;
  };
  responsibles: [{ name: Responsibles[] | string | null | undefined }];
  status: string;
}

interface CardProps {
  bloxe: Bloxe;
}

export function Card({ bloxe }: CardProps): JSX.Element {
  const names = bloxe.responsibles.map(item => item.name && item.name);

  return (
    <Container>
      <Header color1={bloxe.knowledge_area.color1}>
        <div>
          <p>Data limite</p>
          <h2 id="title">{bloxe.date_limit_edition}</h2>
        </div>
        <FiCheck size={24} />
      </Header>
      <Main color2={bloxe.knowledge_area.color2}>
        <ItemType>
          <img src={bloxe.knowledge_area.icon_url} alt="teste" />

          <Details>
            <IDContainer>
              <span>ID</span>
              <p>{bloxe.blox_profile.id}</p>
            </IDContainer>
            <ModalityContainer>
              <span>Modalidade</span>
              <p>{bloxe.modality}</p>
            </ModalityContainer>
          </Details>
        </ItemType>

        <strong>{bloxe.title}</strong>
      </Main>
      <Footer color1={bloxe.knowledge_area.color1}>
        {names.length ? (
          <p>{names.join(' e ').toUpperCase()}</p>
        ) : (
          <p>Sem editor responsável</p>
        )}
      </Footer>
    </Container>
  );
}
