import styled from "styled-components";

const CardBorder = styled.div`
  background-color: white;
  border-radius: 8px;
  border: solid gray 1px;
  padding: 15px;
`;

export default function Card(props) {
  return <CardBorder>{props.children}</CardBorder>;
}
