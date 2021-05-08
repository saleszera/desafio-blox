import styled, { css } from 'styled-components';

interface HexagonProps {
  backgroundColor?: string;
  small?: boolean;
}

export default styled.div<HexagonProps>`
  position: relative;

  ${({ backgroundColor, small }) =>
    small
      ? css`
          background: ${backgroundColor};
          width: 25px;
          height: 12px;

          &:before {
            content: '';
            position: absolute;
            top: -6px;
            left: 0;
            width: 0;
            height: 0;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 6px solid ${backgroundColor};
          }

          &:after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 0;
            height: 0;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-top: 6px solid ${backgroundColor};
          }
        `
      : css`
          background: ${backgroundColor};
          width: 100px;
          height: 55px;

          &:before {
            content: '';
            position: absolute;
            top: -25px;
            left: 0;
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 25px solid ${backgroundColor};
          }

          &:after {
            content: '';
            position: absolute;
            bottom: -25px;
            left: 0;
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-top: 25px solid ${backgroundColor};
          }
        `}
`;
