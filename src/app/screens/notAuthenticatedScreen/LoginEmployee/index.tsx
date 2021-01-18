import SvgUri from 'expo-svg-uri';
import React from 'react';
import { Text, TextInput } from 'react-native';
import { ButtonCadastre, ButtonOption } from '../../../components/buttons.styled';
import { Container, Header, Inputs } from '../../../components/layout.styled';



const LoginEmployee: React.FC = ({ navigation }) => {
  return (
    <Container bg="#7A60D1">
      <Header>
        <SvgUri
          width="200"
          height="200"
          source={require("../../../assets/LogoWhite.svg")}
        />
      </Header>

      <Inputs onChange={ () => {} } placeholder="Digite sua Email" />
      <Inputs onChange={ () => {} } placeholder="Digite sua Senha" />
      <ButtonOption color="#fff" onPress={()=> navigation.navigate('LoginEmployee')} ><Text style={{color: "#7A60D1"}} >Entrar</Text></ButtonOption>
      <ButtonCadastre onPress={ () => navigation.navigate('CadastroEmployee') } >
        <Text style={{color: "#fff"}} >Ainda não possui cadastro? Cadastre-se!</Text>
      </ButtonCadastre>
    </Container>
  )
}

export default LoginEmployee;