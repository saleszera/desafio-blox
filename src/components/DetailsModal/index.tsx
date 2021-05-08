import React from 'react';
import Modal from 'react-modal';
import { FiXCircle, FiBookmark } from 'react-icons/fi';

import Hexagon from '../Hexagon';
import {
  Header,
  Modalities,
  ModalityContainer,
  WorkloadContainer,
  Section,
  Areas,
  KnowledgeArea,
  FunctionalArea,
  OtherThings,
  Profile,
  Competencies,
} from './styles';

interface Bloxe {
  id: number;
  date_limit_edition: string;
  title: string;
  blox_profile: {
    id: number;
  };
  modality: string;
  knowledge_area: {
    color1: string;
    color2: string;
    name: string;
  };
  responsibles: [{ name: string[] | string | null | undefined }];
  status: string;
  functional_area: {
    name: string;
  };
  competences: [
    {
      name: string;
    }
  ];
  hours: number;
}

interface DetailsModalProps {
  isOpen: boolean;
  OnRequestClose: () => void;
  bloxeDetail: Bloxe | undefined;
}

export function DetailsModal({
  OnRequestClose,
  isOpen,
  bloxeDetail,
}: DetailsModalProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={OnRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={OnRequestClose}
        className="react-modal-close"
      >
        <FiXCircle size={24} color="#f8f8f8" />
      </button>

      <Header color={bloxeDetail?.knowledge_area.color1}>
        <h1>{bloxeDetail?.title}</h1>
      </Header>
      <Modalities>
        <Hexagon
          backgroundColor={bloxeDetail?.knowledge_area.color2}
          className="hexagon-position"
        />
        <ModalityContainer>
          <h2>Modalidade</h2>
          <h1>{bloxeDetail?.modality}</h1>
        </ModalityContainer>
        <WorkloadContainer>
          <h2>Carga horária</h2>
          <h1>{bloxeDetail?.hours}h</h1>
        </WorkloadContainer>
      </Modalities>
      <Section>
        <Areas>
          <KnowledgeArea>
            <h2>Área de conhecimento</h2>
            <div>
              <Hexagon
                small
                backgroundColor={bloxeDetail?.knowledge_area.color2}
              />
              <p>{bloxeDetail?.functional_area.name}</p>
            </div>
          </KnowledgeArea>
          <FunctionalArea color={bloxeDetail?.knowledge_area.color2}>
            <h2>Área functional</h2>
            <div>
              <FiBookmark size={24} />
              <p>{bloxeDetail?.functional_area.name}</p>
            </div>
          </FunctionalArea>
        </Areas>
        <OtherThings>
          <Profile>
            <h2>Perfil</h2>
            <p>{bloxeDetail?.knowledge_area.name}</p>
          </Profile>
          <Competencies color={bloxeDetail?.knowledge_area.color2}>
            <h2>Competências</h2>
            {bloxeDetail?.competences.map(item => (
              <p key={item.name}>{item.name}</p>
            ))}
          </Competencies>
        </OtherThings>
      </Section>
    </Modal>
  );
}
