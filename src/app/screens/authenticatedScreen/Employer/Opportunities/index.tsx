import React from 'react';
import { Text } from 'react-native';
import { StartButton } from '../../../../components/buttons.styled';
import { Container } from '../../../../components/layout.styled';
import { AntDesign } from '@expo/vector-icons';

const OpportunitiesEmployer: React.FC = ({navigation}) => {
  return (
    <Container>
      <Text>Vagas Postadas pela empresa</Text>
      <StartButton onPress={ () => navigation.navigate('EditOpportunities') } >
        <AntDesign name="arrowright" size={24} color="#000000" />
      </StartButton>
    </Container>
  )
}

export default OpportunitiesEmployer;