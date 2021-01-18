import React from 'react';
import { Text } from 'react-native';
import { Container, Header } from '../../../../components/layout.styled';
import { Feather } from "@expo/vector-icons";
import { TitleAbsolute } from '../../../../styles/Texts';
import SvgUri from 'expo-svg-uri';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CandidateOpportunitie: React.FC = () => {
  return (
    <Container>
       <TitleAbsolute top="10%" left="23%">
       Candidatar-se a vaga
      </TitleAbsolute>
      <Header>
        <SvgUri
          style={{ top: -60 }}
          width="220"
          height="220"
          source={require("../../../../assets/candidate.svg")}
        />
      </Header>
      <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#7A60D1', padding: 15, borderRadius: 5 }}>
      <Feather name="upload" size={50} color="#f8f8f2" />
      <Text style={{ fontSize: 18, color: '#f8f8f2' }} >Faça o Upload do seu currículo</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default CandidateOpportunitie;