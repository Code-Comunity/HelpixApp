import React, { useState } from 'react';
import { Button, Picker, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Title } from '../styles/Texts';
import { SimpleButton } from './buttons.styled';


function JobsAdd() {

  const [ language, setLanguage ] = useState<any>()

  return (
    <>
    <Title> Qual cargo deseja divulgar? </Title>
    <Picker
    selectedValue={language}
    style={{ height: 50, width: "100%" }}
    onValueChange={(itemValue, itemIndex) => setLanguage({ language: itemValue })}>
    <Picker.Item label="Jovem aprendiz" value="Jovem aprendiz" />
    <Picker.Item label="Estágio" value="Estágio" />
    <Picker.Item label="PJ" value="PJ" />
  </Picker>

  <Title> Qual a função do cargo? </Title>
  <TextInput placeholder="Diga quanto você está disposto a pagar" />

  <Title> Carga Horária </Title>
  <TextInput placeholder="Diga quanto você está disposto a pagar" />

  <Title> Salário? </Title>
  <TextInput placeholder="Diga quanto você está disposto a pagar" />

  <SimpleButton title="Postar" onPress={()=>{}} >
    <Text style={{color:"#fff"}}>Postar</Text>
  </SimpleButton>

  </>
  );
}

export default JobsAdd;