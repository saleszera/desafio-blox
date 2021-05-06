import React, { useEffect, useState } from 'react';
import { FiSearch, FiGrid, FiList } from 'react-icons/fi';
import axios from 'axios';

import {
  Container,
  FilterTypesContainer,
  FilterTypeText,
  FilterContainer,
  FilterInputContainer,
  ItemsOrderContainer,
  ItemContainer,
} from './styles';
import { Card } from '../../components/Card';

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
}

export const Dashboard: React.FC = () => {
  const [bloxes, setBloxes] = useState<Bloxe[]>();
  const [isGridActive, setIsGridActive] = useState(true);

  useEffect(() => {
    function loadData() {
      axios
        .post('https://api-dev.plataformablox.com.br/api/token', {
          username: 'integratorTeste',
          password: '12345',
          institution_id: 22,
        })
        .then(({ data: tokenData }) => {
          axios
            .get('https://api-dev.plataformablox.com.br/api/bloxes', {
              headers: {
                Authorization: tokenData.token,
              },
            })
            .then(({ data: bloxesData }) => {
              const bloxesFormatted = bloxesData.map((item: Bloxe) => {
                return {
                  ...item,
                  date_limit_edition: item.date_limit_edition
                    ? new Date(item.date_limit_edition).toLocaleDateString(
                        'pt-BR',
                        {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        }
                      )
                    : 'Sem data limite',
                  knowledge_area: {
                    ...item.knowledge_area,
                    icon_url: item.knowledge_area.icon_url
                      ? item.knowledge_area.icon_url
                      : 'https://images.unsplash.com/photo-1520004434532-668416a08753?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  },
                };
              });

              // console.log(bloxesData);

              setBloxes(bloxesFormatted);
            });
        });
    }

    loadData();
  }, []);

  return (
    <Container>
      <FilterTypesContainer>
        <FilterTypeText>Arquivados</FilterTypeText>

        <FilterContainer>
          <FilterInputContainer>
            <input type="text" placeholder="Título ou ID" />
            <FiSearch size={24} />
          </FilterInputContainer>

          <select id="status">
            <option value="" disabled selected hidden>
              Filtrar
            </option>
            <option value="aberto">Aberto para edição</option>
            <option value="aguardando">Aguardando revisão</option>
            <option value="aprovado">Aprovado</option>
            <option value="arquivodos">Arquivados</option>
          </select>
        </FilterContainer>
      </FilterTypesContainer>

      <ItemsOrderContainer>
        <button
          type="button"
          className={isGridActive ? 'active' : ''}
          onClick={() => setIsGridActive(true)}
        >
          <FiGrid size={24} />
        </button>

        <button
          type="button"
          className={!isGridActive ? 'active' : ''}
          onClick={() => setIsGridActive(false)}
        >
          <FiList size={24} />
        </button>
      </ItemsOrderContainer>

      <ItemContainer isGridActive={isGridActive}>
        {bloxes && bloxes.map(item => <Card key={item.title} bloxe={item} />)}
      </ItemContainer>
    </Container>
  );
};
