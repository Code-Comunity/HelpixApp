import { AntDesign } from '@expo/vector-icons';
import { default as SvgUri } from "expo-svg-uri";
import React from 'react';
import { StartButton } from "../../../components/buttons.styled";
import { Container, Header } from '../../../components/layout.styled';
import { Description, Title } from '../../../styles/Texts';
  

const Home: React.FC = ({ navigation }) => {
  return (
    <Container bg="#7A60D1">
      <Header>
      <SvgUri
        width="200"
        height="200"
        source={require("../../../assets/LogoWhite.svg")}
      />
      </Header>
      <Title textAlign="center" color="#Fff">Bem vindo ao Helpix!</Title>
      <Description textAlign="center" color="#F8F8F2">Para começar, você deve dizer qual o seu interesse, e que tipo de pessoa você é, empresa ou aluno</Description>
      <StartButton onPress={ () => navigation.navigate('ChooseOptions') } >
        <AntDesign name="arrowright" size={24} color="#fff" />
      </StartButton>
    </Container>
  );
}

export default Home