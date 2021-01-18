import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${ ( prop:any ) => prop.bg || "#f8f8f2" };
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  min-height: 100%;
  width: 100%;
  margin-top: 150px;

  align-items: center;
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

export const Titlles = styled.Text`
  font-size: 25px;
  color: #7A60D1;
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

export const InputBorder = styled.TextInput`
  width: 80%;
  height: 40px;
  margin: 10px;
  padding: 5px;
  border-radius: 9px;
  border: 1px #7A60D1;
  color: #7A60D1;
  background: ${ ( prop:any ) => prop.bg || "#f8f8f2" }; 
`;

//Cards
export const Card = styled.View`
  width: 85%;
  height: 180px;
  background: ${ ( prop:any ) => prop.bg || "#e9e8e8" };
  margin-top: 20px;
  border-radius: 9px;
  margin-bottom: 20px;

  flex-direction: row;
`;

export const CardCandidatos = styled.View`
  width: 85%;
  height: 140px;
  background: ${ ( prop:any ) => prop.bg || "#e9e8e8" };
  margin-top: 20px;
  border-radius: 9px;


  flex-direction: row;
  justify-content: space-around;
`;

export const CardLeft = styled.View`
  width: 30%;
  background: ${ ( prop:any ) => prop.bg || "#7A60D1" };
  border-radius: 9px;

  justify-content: center;
  align-items: center;
`;

export const CardRight = styled.View`
  width: 50%;
  margin-left: 10px;
  color: #7A60D1;
  font-size: 15px;

  justify-content: center;
  align-items: center;

`;

export const CardIcon = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
