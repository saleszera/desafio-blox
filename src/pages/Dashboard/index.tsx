import React from 'react';
import { FiSearch, FiGrid, FiList } from 'react-icons/fi';

import {
  Container,
  FilterTypesContainer,
  FilterTypeText,
  FilterContainer,
  FilterInputContainer,
  ItemsOrderContainer,
  ItemsOrderButton,
  ItemContainer,
} from './styles';
import { Card } from '../../components/Card';

export const Dashboard: React.FC = () => {
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
        <ItemsOrderButton>
          <FiGrid size={24} />
        </ItemsOrderButton>

        <ItemsOrderButton>
          <FiList size={24} />
        </ItemsOrderButton>
      </ItemsOrderContainer>

      <ItemContainer>
        <Card />
      </ItemContainer>
    </Container>
  );
};
