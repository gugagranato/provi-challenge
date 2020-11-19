import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;


export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  /* justify-content: center; */
  width: 100%;
  max-width: 1000px;
`;

export const Title = styled.h1` 
  margin-top: 100px;
  color: #02153C;
`;

export const InputId = styled.input` 
  margin: 36px 10px 0 0;
  flex: 1;
  background: transparent;
  border-width: thin;
  color: #0e1563;
  padding: 8px;
  border-radius: 4px;
  width: 230px;
  &::placeholder {
    padding-left: 12px;
    color: #969491;
  }
`;

export const TitleButton = styled.h3`

color: #02153C;
`;
export const ContainerImage = styled.div``;