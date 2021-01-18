import SvgUri from 'expo-svg-uri';
import React from 'react';
import { Text, View } from 'react-native';
import { ButtonOption } from '../../../components/buttons.styled';
import { Container, Header, InputBorder, Titlles } from '../../../components/layout.styled';
import { EvilIcons } from '@expo/vector-icons';


const CadastroEmployee: React.FC = ({ navigation }) => {
  return (
    <Container>
        
      <EvilIcons name="user" size={120} color="#7A60D1" />

      <InputBorder onChange={ () => {} } placeholder="Digite seu Nome" />
      <InputBorder onChange={ () => {} } placeholder="Digite seu Email" />
      <InputBorder onChange={ () => {} } placeholder="Digite seu Gênero" />
      <InputBorder onChange={ () => {} } placeholder="Digite seu Estado" />
      <InputBorder onChange={ () => {} } placeholder="Digite sua Cidade" />
      <InputBorder onChange={ () => {} } placeholder="Digite seu Bairro" />
      <InputBorder onChange={ () => {} } placeholder="Digite seu Data de nascimento" />
      <InputBorder onChange={ () => {} } placeholder="Digite sua Escolaridade" />
      <InputBorder onChange={ () => {} } placeholder="Digite a Instituição de ensino" />
      <InputBorder onChange={ () => {} } placeholder="Digite seu Celular" />

      <ButtonOption color="#fff" onPress={()=> navigation.navigate('LoginEmployee')} ><Text style={{color: "#7A60D1"}} >Cadastrar</Text></ButtonOption>

    </Container>
  )
}

export default CadastroEmployee;