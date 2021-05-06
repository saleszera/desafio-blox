import React, { useCallback, useEffect, useState } from 'react';
import { FiSearch, FiGrid, FiList } from 'react-icons/fi';

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
import { api } from '../../services/api';

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

export const Dashboard: React.FC = () => {
  const [bloxes, setBloxes] = useState<Bloxe[]>();
  const [bloxesFiltered, setBloxesFiltered] = useState<Bloxe[]>();
  const [token, setToken] = useState<string>();
  const [isGridActive, setIsGridActive] = useState(true);

  useEffect(() => {
    function loadToken() {
      const userTokenStored = localStorage.getItem('@desafioBlox:token');

      if (userTokenStored) {
        setToken(userTokenStored);
      } else {
        api
          .post('/token', {
            username: 'integratorTeste',
            password: '12345',
            institution_id: 22,
          })
          .then(({ data: tokenData }) => {
            setToken(tokenData.token);
            localStorage.setItem('@desafioBlox:token', tokenData.token);
          });
      }
    }

    function loadData() {
      const bloxesStored = localStorage.getItem('@desafioBlox:bloxes');

      if (bloxesStored) {
        setBloxes(JSON.parse(bloxesStored));
        setBloxesFiltered(JSON.parse(bloxesStored));
      } else {
        api
          .get('/bloxes', {
            headers: {
              Authorization: token,
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

            setBloxes(bloxesFormatted);
            setBloxesFiltered(bloxesFormatted);
            localStorage.setItem(
              '@desafioBlox:bloxes',
              JSON.stringify(bloxesFormatted)
            );
          });
      }
    }

    loadToken();
    loadData();
  }, [token]);

  const handleFilter = useCallback(
    (option: string) => {
      if (option === 'all') {
        setBloxesFiltered(bloxes);
      } else {
        const bloxesFilteresByStatus = bloxes?.filter(
          item => item.status === option
        );
        setBloxesFiltered(bloxesFilteresByStatus);
      }
    },
    [bloxes]
  );

  return (
    <Container>
      <FilterTypesContainer>
        <FilterTypeText>Arquivados</FilterTypeText>

        <FilterContainer>
          <FilterInputContainer>
            <input type="text" placeholder="Título ou ID" />
            <FiSearch size={24} />
          </FilterInputContainer>

          <select id="status" onChange={e => handleFilter(e.target.value)}>
            <option value="default" hidden>
              Filtrar
            </option>
            <option value="all">Todos</option>
            <option value="pending">Aberto para edição</option>
            <option value="review">Aguardando revisão</option>
            <option value="accepted">Aprovado</option>
            <option value="archived">Arquivados</option>
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
        {bloxesFiltered &&
          bloxesFiltered.map(item => <Card key={item.title} bloxe={item} />)}
      </ItemContainer>
    </Container>
  );
};
