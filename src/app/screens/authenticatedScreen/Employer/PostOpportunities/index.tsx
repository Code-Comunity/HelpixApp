import React, { useState } from 'react';
import { Picker } from 'react-native';
import { Text } from 'react-native';
import JobsAdd from '../../../../components/Jobs';
import { Container, Main } from '../../../../components/layout.styled';
import { Title, TitleAbsolute } from '../../../../styles/Texts';
import { Feather } from "@expo/vector-icons";

const PostOpportunities: React.FC = ({ navigation }) => {

  return (
    <Container>
      <Feather
        name="arrow-left"
        size={24}
        color="#7A60D1"
        style={{ position: "absolute", top: "10%", left: "90%", zIndex: 50 }}
        onPress={() => navigation.goBack()}
      />
      <TitleAbsolute top="10%" left="5%">
        Postar Vaga
      </TitleAbsolute>
      <Main Vertical>
        <JobsAdd />
      </Main>
    </Container>
  )
}

export default PostOpportunities;