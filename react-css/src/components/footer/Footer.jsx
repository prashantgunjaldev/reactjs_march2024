import styled from "styled-components";

//Used h1 element from styled lib
// Applied custom CSS
const H3One = styled.h3`
  color: teal;
`;

const H3Two = styled.h3`
  color: red;
`;

export default function Footer() {
  return (
    <>
      <H3One> H3 numbe 1 </H3One>
      <H3Two> H3 number 2 </H3Two>
    </>
  );
}
