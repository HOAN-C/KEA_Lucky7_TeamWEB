import React, { useEffect, useState } from "react";
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
    transform: translateX(30%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const IntroductionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  margin-right: 20px;
  text-align: center;
  width: 17vw;
  height: auto;
  opacity: 0;
  transition: opacity 1s, transform 1s;
  animation: ${fadeInMovingAnimation} 1s ease-out;
`;

const IntroText = styled.div`
  margin-left: 20px;
  font-size: 24px;
  color: white;
  animation: ${fadeInAnimation} 3s ease;
  text-align: left;
`;

const Catchphrase = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #369e41;
`;

export default function Introduction() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <IntroductionContainer>
      <LogoImage
        src="/image/phone.png"
        alt="phone image"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateX(0)" : "translateX(30%)",
        }}
      />
      <IntroText>
        <Catchphrase>'행운이 만나 기적을 만든다.'</Catchphrase>
        끊임없는 노력과 열정으로 성장하는 팀, <br />
        <Highlight>Lucky7</Highlight>입니다.
      </IntroText>
    </IntroductionContainer>
  );
}
