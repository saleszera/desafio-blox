import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FiSearch, FiGrid, FiList } from 'react-icons/fi';

import {
  Container,
  FilterTypesContainer,
  FilterTypeText,
  FilterContainer,
  FilterInputContainer,
  ItemsOrderContainer,
  ItemContainer,
  NextPageButtonContainer,
  NextPageButton,
} from './styles';
import { Card } from '../../components/Card';
import { LoadingCard } from '../../components/shimmer/LoadingCard';
import { DetailsModal } from '../../components/DetailsModal';
import { api } from '../../services/api';

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
    icon_url: string | null;
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

Modal.setAppElement('#root');

export const Dashboard: React.FC = () => {
  const [bloxes, setBloxes] = useState<Bloxe[]>();
  const [bloxesFiltered, setBloxesFiltered] = useState<Bloxe[]>();
  const [showDetails, setShowDetails] = useState<Bloxe>();
  const [optionActive, setOptionActive] = useState('Todos');
  const [token, setToken] = useState<string>();
  const [page, setPage] = useState(1);
  const [isGridActive, setIsGridActive] = useState(true);
  const [isInputActive, setIsInputActive] = useState(false);
  const [isFinalPageReached, setIsFinalPageReached] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  function handleOpenNewDetailsModal(bloxe: Bloxe) {
    setIsDetailsModalOpen(true);
    setShowDetails(bloxe);
    document.body.style.overflow = 'hidden';
  }

  function handleCloseNewDetailsModal() {
    setIsDetailsModalOpen(false);

    document.body.style.overflow = 'auto';
  }

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
      setIsLoading(true);

      api
        .get(`/bloxes?per=3&page=${page}`, {
          headers: {
            Authorization: token,
          },
        })
        .then(({ data: bloxesData }) => {
          if (bloxesData.length === 0) {
            setIsFinalPageReached(true);
            setIsLoading(false);
          } else {
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
              };
            });
            setBloxes(bloxesFormatted);
            setBloxesFiltered(bloxesFormatted);
            setIsFinalPageReached(false);
            setIsLoading(false);
            console.log(bloxesFormatted);
          }
        })
        .catch(() => {
          loadToken();
        });
    }

    loadData();
  }, [token, page]);

  const handleFilterByStatus = useCallback(
    (option: string) => {
      switch (option) {
        case 'pending': {
          const bloxesFilteredByStatus = bloxes?.filter(
            item => item.status === 'pending'
          );

          setBloxesFiltered(bloxesFilteredByStatus);
          setOptionActive('Pendente');
          break;
        }
        case 'review': {
          const bloxesFilteredByStatus = bloxes?.filter(
            item => item.status === 'review'
          );

          setBloxesFiltered(bloxesFilteredByStatus);
          setOptionActive('Revisão');
          break;
        }
        case 'accepted': {
          const bloxesFilteredByStatus = bloxes?.filter(
            item => item.status === 'accepted'
          );

          setBloxesFiltered(bloxesFilteredByStatus);
          setOptionActive('Aprovado');
          break;
        }
        case 'archived': {
          const bloxesFilteredByStatus = bloxes?.filter(
            item => item.status === 'archived'
          );

          setBloxesFiltered(bloxesFilteredByStatus);
          setOptionActive('Arquivado');
          break;
        }
        default:
          setBloxesFiltered(bloxes);
          setOptionActive('Todos');
          break;
      }
    },
    [bloxes]
  );

  const handleFilterByTitleOrId = useCallback(
    (value: string | number) => {
      if (value === '') {
        setBloxesFiltered(bloxes);
        setIsInputActive(false);
      } else {
        const bloxesTilteredByIdOrTitle = bloxes?.filter(
          item =>
            item.title.toUpperCase().includes(String(value).toUpperCase()) ||
            String(item.blox_profile.id).includes(String(value))
        );

        setBloxesFiltered(bloxesTilteredByIdOrTitle);
        setIsInputActive(true);
        setOptionActive('Todos');
      }
    },
    [bloxes]
  );

  const handleIncrementPage = useCallback(() => {
    setPage(oldState => oldState + 1);
    window.location.href = '#';
  }, []);

  const handleDecrementPage = useCallback(() => {
    if (page > 1) setPage(oldState => oldState - 1);
    window.location.href = '#';
  }, [page]);

  return (
    <>
      <DetailsModal
        OnRequestClose={handleCloseNewDetailsModal}
        isOpen={isDetailsModalOpen}
        bloxeDetail={showDetails}
      />

      <Container>
        <FilterTypesContainer>
          <FilterTypeText>{optionActive}</FilterTypeText>

          <FilterContainer isSelectActive={optionActive !== 'Todos'}>
            <FilterInputContainer isInputActive={isInputActive}>
              <input
                type="text"
                placeholder="Título ou ID"
                onChange={e => {
                  handleFilterByTitleOrId(e.target.value);
                }}
              />
              <FiSearch size={24} />
            </FilterInputContainer>

            <select
              id="status"
              onChange={e => handleFilterByStatus(e.target.value)}
            >
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
          {isLoading ? (
            <>
              <LoadingCard />
            </>
          ) : (
            bloxesFiltered?.map(item => (
              <Card
                key={item.id}
                bloxe={item}
                onClick={() => handleOpenNewDetailsModal(item)}
              />
            ))
          )}
        </ItemContainer>

        <NextPageButtonContainer>
          <NextPageButton
            isLoading={isLoading}
            disabled={page === 1 || isLoading}
            onClick={handleDecrementPage}
          >
            Anterior
          </NextPageButton>
          <NextPageButton
            isLoading={isLoading}
            disabled={isFinalPageReached || isLoading}
            onClick={handleIncrementPage}
          >
            Próximo
          </NextPageButton>
        </NextPageButtonContainer>
      </Container>
    </>
  );
};
