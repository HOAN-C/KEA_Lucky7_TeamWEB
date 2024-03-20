import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInMovingAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SymbolContainer = styled.div`
  //   border: solid red 1px;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SymbolText = styled.div`
  //   border: solid red 1px;
  text-align: right;
  margin-right: 40px;
  font-size: 24px;
  color: black;
  animation: ${fadeInAnimation} 3s ease;
`;

const Highlight = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #369e41;
`;

const ColorTemplate = styled.div`
  border: solid gray 1px;
  border-radius: 8px;
  width: 210px;
  height: 336px;
  display: flex;
  flex-flow: column;
  animation: ${fadeInMovingAnimation} 1s ease-out;
  align-items: center;
`;

const Painted = styled.div`
  background-color: #369e41;
  border-radius: 8px;
  width: 180px;
  height: 180px;
  margin: 15px;
`;

const Disc = styled.div`
  //   border: solid gray 1px;
  width: 100%;
  height: 20%;
`;

const Color = styled.div`
  color: black;
  font-weight: bold;
  font-size: 26px;
  margin: 10px 10px 10px 15px;
`;

const ColorCode = styled.div`
  color: gray;
  font-weight: bold;
  font-size: 16px;
  margin: 10px 10px 10px 15px;
`;

export default function Symbol() {
  return (
    <SymbolContainer>
      {/* <LogoImage src="/image/logo.png" alt="logo image" /> */}
      <SymbolText>
        <h3>#Team_Color</h3>
        행운을 상징하고 <br />
        함께 협력하는 긍정적인 분위기를 만드는 <br />
        <Highlight>네잎클로버🍀</Highlight>는 팀 대표 컬러입니다.
      </SymbolText>
      <ColorTemplate>
        <Painted></Painted>
        <Disc>
          <Color>Clover Green</Color>
          <ColorCode>#369E41</ColorCode>
        </Disc>
      </ColorTemplate>
    </SymbolContainer>
  );
}
