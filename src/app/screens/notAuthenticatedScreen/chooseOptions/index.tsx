import SvgUri  from 'expo-svg-uri';
import React from 'react';
import { Text } from 'react-native';
import { Container, Header, Options, Session, TextAbout } from '../../../components/layout.styled';
import { FontAwesome5 } from '@expo/vector-icons';
import { ButtonOption } from '../../../components/buttons.styled';

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
      <Session>
        <Options>
          <FontAwesome5 name="hotel" size={100} color="#fff" />
          <ButtonOption color="#fff" onPress={()=> navigation.navigate('LoginEmployer')}><Text style={{color: "#7A60D1"}}>Sou empresa</Text></ButtonOption> 
        </Options>
        <Options>
          <FontAwesome5 name="user-graduate" size={100} color="#fff" />
          <ButtonOption color="#fff" onPress={()=> navigation.navigate('LoginEmployee')} ><Text style={{color: "#7A60D1"}} >Sou aluno</Text></ButtonOption> 
        </Options>
      </Session>
      <TextAbout>A nossa plataforma é focada em jovens em busca de oportunidades</TextAbout>
    </Container>
  )
}

export default ChooseOptions;