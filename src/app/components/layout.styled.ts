import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${ ( prop:any ) => prop.bg || "#f8f8f2" };
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  height: 40%;
  width: 100%;
  border-color: black;
  justify-content: center;
  align-items: center;
`;