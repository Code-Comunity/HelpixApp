import React from 'react';
import { Button, Text } from 'react-native';
import { Container } from '../../../../components/layout.styled';


const DashboardEmployee: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Text>Dashboard Aluno</Text>
      <Button title="Ir para as oportunidades dos alunos" onPress={()=>navigation.navigate('OpportunitiesEmployee')} />
      <Button title="Ir para as oportunidades das Empresas" onPress={()=>navigation.navigate('OpportunitiesEmployer')} />
    </Container>
  )
}

export default DashboardEmployee;