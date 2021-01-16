import SvgUri from 'expo-svg-uri';
import React from 'react';
import { Button } from 'react-native';
import { Container, Header } from '../../../components/layout.styled';

const ChooseOptions: React.FC = ({ navigation }) => {
  return (
    <Container bg="#7A60D1">
      <Header>
      <SvgUri
      width="200"
      height="200"
      source={require("../../../assets/LogoWhite.svg")}
      />
      </Header>

      <Button onPress={()=> navigation.navigate('LoginEmployer')} title="Sou Empresa"/>
      <Button onPress={()=> navigation.navigate('LoginEmployee')} title="Sou aluno" />

    </Container>
  )
}

export default ChooseOptions;