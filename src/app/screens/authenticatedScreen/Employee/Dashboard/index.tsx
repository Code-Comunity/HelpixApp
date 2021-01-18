import SvgUri from "expo-svg-uri";
import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LargeButton } from "../../../../components/buttons.styled";
import {
  Courses,
  CoursesChannel,
  CoursesDificutly,
  CoursesImages,
  CoursesTilte,
} from "../../../../components/dashboard.styled";
import { Container, Header, Main } from "../../../../components/layout.styled";
import { Title, TitleAbsolute } from "../../../../styles/Texts";
import { Courses as Learn } from "../../../../../infra/services/mock";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const DashboardEmployee: React.FC = ({ navigation }) => {
  return (
    <Container>
      <TitleAbsolute top="10%" left="5%">
        Welcome Raíle
      </TitleAbsolute>
          <Feather
          name="settings"
          size={24}
          color="#7A60D1"
          style={{ position: "absolute", top: "10%", left: "90%", zIndex: 50 }}
          onPress={() => navigation.navigate('DashboardEmployer')}
        />
      
      <Header>
        <SvgUri
          style={{ top: 50 }}
          width="120"
          height="120"
          source={require("../../../../assets/dashstudent.svg")}
        />
      </Header>

      <LargeButton onPress={() => navigation.navigate("OpportunitiesEmployee")}>
      <Text style={{color:"#7A60D1"}} >Ver oportunidades 
          <Feather 
          name="search"
          size={14}
          color="#7A60D1" 
          />
        </Text>
      </LargeButton>

      <Title style={{ top: 10 }} >Free courses</Title>
      <Main top="2%" Vertical>
        {Learn.map((e) => {
          return (
            <Courses>
              <View>
                <CoursesTilte>{e.title}</CoursesTilte>
                <CoursesDificutly>{e.dificutly}</CoursesDificutly>
                <CoursesChannel>{e.channel}</CoursesChannel>
              </View>

              <CoursesImages source={{ uri: e.image }} />
            </Courses>
          );
        })}
      </Main>
    </Container>
  );
};

export default DashboardEmployee;
