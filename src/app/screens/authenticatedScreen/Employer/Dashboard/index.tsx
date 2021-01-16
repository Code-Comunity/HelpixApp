import React from 'react';
import { Button, Text } from 'react-native';
import { Container } from '../../../../components/layout.styled';


const DashboardEmployer: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Text>Dashboard Empresas</Text>
      <Button title="Ir para as oportunidades dos alunos" onPress={()=>navigation.navigate('OpportunitiesEmployee')} />
      <Button title="Ir para as oportunidades das Empresas" onPress={()=>navigation.navigate('OpportunitiesEmployer')} />
    </Container>
  )
}

export default DashboardEmployer;