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

export const TitleAbsolute = styled.Text`
  width: ${ (props:any) => props.width || "90%" };
  text-align: ${ (props:any) => props.textAlign || "left" };
  color: ${ (props:any) => props.color || "#44475A" };
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 29px;
  position: absolute;
  top: ${ (props:any) => props.top || "0"};
  left: ${ (props:any) => props.left || "0" };
`