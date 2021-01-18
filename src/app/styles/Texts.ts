import styled from 'styled-components/native';

export const Title = styled.Text`
  width: ${ (props:any) => props.width || "90%" };
  text-align: ${ (props:any) => props.textAlign || "left" };
  color: ${ (props:any) => props.color || "#44475A" };
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

`

export const Description = styled.Text`
  width: ${ (props:any) => props.width || "90%" };
  text-align: ${ (props:any) => props.textAlign || "left" };
  color: ${ (props:any) => props.color || "#44475A" };
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 29px;

`
export const TextCard = styled.Text`
  color: #7A60D1;
  text-align: left;
`;

export const TittleCard = styled.Text`
  color: #7A60D1;
  font-size: 20px;

`;
