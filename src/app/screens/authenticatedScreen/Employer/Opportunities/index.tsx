import React from "react";
import { Text, View, Image } from "react-native";
import { Container, Main } from "../../../../components/layout.styled";
import { TitleAbsolute } from "../../../../styles/Texts";
import { Feather } from "@expo/vector-icons";
import { OpportunitiesButton } from "../../../../components/buttons.styled";

import { EmployerJobs } from "../../../../../infra/services/mock";
import { SafeAreaView } from "react-native-safe-area-context";

const OpportunitiesEmployee: React.FC = ({ navigation }) => {
  return (
    <Container>
      <TitleAbsolute top="10%" left="5%" color="#7A60D1">
        Vagas
      </TitleAbsolute>
      <Feather
        name="arrow-left"
        size={24}
        color="#7A60D1"
        style={{ position: "absolute", top: "10%", left: "90%", zIndex: 50 }}
        onPress={() => navigation.goBack() }
      />
      <Feather
        name="plus"
        size={24}
        color="#7A60D1"
        style={{ position: "absolute", top: "10%", left: "80%", zIndex: 50 }}
        onPress={() => navigation.navigate('PostOpportunities') }
      />
      <SafeAreaView>
      <Main Vertical>
        {EmployerJobs ? (
          EmployerJobs.map((e: any) => {
            return (
              <OpportunitiesButton key={e.title} onPress={() => navigation.navigate('CandidateOpportunitie') } >
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
                  <Feather name="edit" size={24} color="#7A60D1" />
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    Editar Vaga
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
