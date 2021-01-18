import styled from 'styled-components/native';

export const Courses = styled.TouchableOpacity`
  background: #E9E8E8;
  height: 170px;
  width: 97%;
  left: 1%;
  margin-top: 15;
  margin-bottom: 25;
  padding: 15px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20;
`
export const CoursesTilte = styled.Text`
  font-size: 24;
  width: 100%;
  text-align: left;
`

export const CoursesChannel = styled.Text`
  font-size: 17;
  color: rebeccapurple;
  width: 80%;
  text-align: left;
`

export const CoursesDificutly = styled.Text`
  font-size: 17;
  color: green;
  width: 80%;
  text-align: left;
`

export const CoursesImages = styled.Image`
  width: 50;
  height: 50;
  border-radius: 100;
`