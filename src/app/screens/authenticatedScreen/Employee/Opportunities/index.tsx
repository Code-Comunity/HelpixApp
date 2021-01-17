import React from "react";
import { Text, View, Image } from "react-native";
import { Container, Main } from "../../../../components/layout.styled";
import { Description, TitleAbsolute } from "../../../../styles/Texts";
import { Feather } from "@expo/vector-icons";
import { OpportunitiesButton } from "../../../../components/buttons.styled";

import { Jobs } from "../../../../../infra/services/mock";
import { SafeAreaView } from "react-native-safe-area-context";

const OpportunitiesEmployee: React.FC = () => {
  return (
    <Container>
      <TitleAbsolute top="10%" left="5%" color="#7A60D1">
        Vagas para os estudantes
      </TitleAbsolute>
      <Feather
        name="settings"
        size={24}
        color="#7A60D1"
        style={{ position: "absolute", top: "10%", left: "90%", zIndex: 50 }}
        onPress={() => {}}
      />
      <SafeAreaView>
      <Main Vertical>
        {Jobs ? (
          Jobs.map((e: any) => {
            return (
              <OpportunitiesButton>
                <Image
                  width={80}
                  height={80}
                  style={{
                    position: "relative",
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                  }}
                  source={require("../../../../assets/peoples.jpg")}
                />
                <View style={{ width: "50%", left: "5%" }}>
                  <Text style={{ fontSize: 12 }}>{e.title}</Text>
                  <Text style={{ fontSize: 12 }}>Salário: {e.value}</Text>
                  <Text style={{ fontSize: 12 }}>Carga Horária: {e.hours}</Text>
                </View>
                <View style={{ width: "20%", alignItems: "center" }}>
                  <Feather name="upload" size={24} color="#7A60D1" />
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    Anexar Curriculo
                  </Text>
                </View>
              </OpportunitiesButton>
            );
          })
        ) : (
          <Text>Nada aqui :l </Text>
        )}
      </Main>        
      </SafeAreaView>
    </Container>
  );
};

export default OpportunitiesEmployee;
