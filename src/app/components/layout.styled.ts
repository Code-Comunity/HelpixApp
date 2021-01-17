import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${ ( prop:any ) => prop.bg || "#f8f8f2" };
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  height: 30%;
  width: 100%;
  border-color: black;
  justify-content: center;
  align-items: center;
`;

export const Session = styled.View`
  width: 80%;

  flex-direction: row;
  justify-content: space-around;
`;

export const Options = styled.View`
  margin: 5px;
  align-items: center;
`;

export const TextAbout = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;

  margin: 8px;
`;

//inputs
export const Inputs = styled.TextInput`
  width: 80%;
  height: 40px;
  margin: 10px;
  padding: 5px;
  border-radius: 9px;
  color: #7A60D1;
  background: ${ ( prop:any ) => prop.bg || "#f8f8f2" }; 
`;
