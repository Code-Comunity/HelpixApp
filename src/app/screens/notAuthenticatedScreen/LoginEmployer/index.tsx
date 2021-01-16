import SvgUri from 'expo-svg-uri';
import React from 'react';
import { TextInput } from 'react-native';
import { Container, Header } from '../../../components/layout.styled';

const LoginEmployer: React.FC = () => {
  return (
    <Container>
      <Header>
        <SvgUri
        width="200"
        height="200"
        source={require("../../../assets/LogoWhite.svg")}
        />
      </Header>

    <TextInput onChange={ () => {} } placeholder="Digite sua Email" />
    <TextInput onChange={ () => {} } placeholder="Digite sua Senha" />

    </Container>
  )
}

export default LoginEmployer;