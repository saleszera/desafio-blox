import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
    0%{
    background-position: 0% 0%;
  }
  100%{
    background-position: -120% 0%;
  }
`;

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #f8f8f8 50%,
    #f8f8f8 0%
  );
  background-size: 400% 400%;

  animation: ${shimmer} 0.9s ease-in-out infinite;
`;
