import SvgUri from 'expo-svg-uri';
import React from 'react';
import { Text, View } from 'react-native';
import { ButtonOption } from '../../../components/buttons.styled';
import { Container, Header, InputBorder, Titlles } from '../../../components/layout.styled';
import { EvilIcons } from '@expo/vector-icons';


const CadastroEmployer: React.FC = ({ navigation }) => {
  return (
    <Container>
        
      <EvilIcons name="user" size={120} color="#7A60D1" />

      <InputBorder onChange={ () => {} } placeholder="Nome completo" />
      <InputBorder onChange={ () => {} } placeholder="Digite seu Email" />
      <InputBorder onChange={ () => {} } placeholder="Cargo" />
      <InputBorder onChange={ () => {} } placeholder="Número de colaboradores" />
      <InputBorder onChange={ () => {} } placeholder="Empresa" />
      <InputBorder onChange={ () => {} } placeholder="Qual o segmento da empresa?" />
      <InputBorder onChange={ () => {} } placeholder="Telefone" />
      <InputBorder onChange={ () => {} } placeholder="Celular" />
      <InputBorder onChange={ () => {} } placeholder="Estado" />
      <InputBorder onChange={ () => {} } placeholder="Bairro" />

      <ButtonOption color="#fff" onPress={()=> navigation.navigate('LoginEmployee')} ><Text style={{color: "#7A60D1"}} >Cadastrar</Text></ButtonOption>

    </Container>
  )
}

export default CadastroEmployer;