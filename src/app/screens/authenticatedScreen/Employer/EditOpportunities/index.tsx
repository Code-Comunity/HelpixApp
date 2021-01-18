import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { Container, Titlles,Content, Card, CardLeft, CardRight, CardCandidatos, CardIcon } from '../../../../components/layout.styled';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { TextCard, TittleCard } from '../../../../styles/Texts';

const image = { uri: 'https://reactjs.org/logo-og.png' };

const EditOpportunities: React.FC = () => {
  return (
    <Container>
      <Content>
        <Titlles>Editar Vaga</Titlles>
        <Card>
          <CardLeft>
            <FontAwesome name="photo" size={24} color="#fff" />
          </CardLeft>
          <CardRight>
            <TittleCard>Jovem aprendiz</TittleCard>
            <TextCard>Vaga de Jovem Aprendiz na Empresa Saber. Funçôes de auxiliar administrativo.</TextCard>
            <TextCard>Salario: R$600</TextCard>
            <TextCard>Carga horária: 4h</TextCard>
          </CardRight>
        </Card>
        <Titlles>Candidatos</Titlles>
        <CardCandidatos>
          <CardLeft>
            <FontAwesome name="photo" size={24} color="#fff" />
          </CardLeft>
          <CardRight>
            <TittleCard>Robin Morty</TittleCard>
            <TextCard>Nasceu em: 2002</TextCard>
            <TextCard>Genero: Feminino</TextCard>
          </CardRight>
          <CardIcon>
            <Entypo name="eye" size={30} color="#7A60D1" />
            <TextCard>Currículo</TextCard>
          </CardIcon>
        </CardCandidatos>

        <CardCandidatos>
          <CardLeft>
            <FontAwesome name="photo" size={24} color="#fff" />
          </CardLeft>
          <CardRight>
            <TittleCard>Amanda Lins</TittleCard>
            <TextCard>Nasceu em: 2000</TextCard>
            <TextCard>Genero: Feminino</TextCard>
          </CardRight>
          <CardIcon>
            <Entypo name="eye" size={30} color="#7A60D1" />
            <TextCard>Currículo</TextCard>
          </CardIcon>
        </CardCandidatos>
      </Content>
    </Container>
  )
}

export default EditOpportunities;