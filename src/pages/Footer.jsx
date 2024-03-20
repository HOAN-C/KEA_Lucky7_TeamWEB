import styled from "styled-components";

const FooterContainer = styled.footer`
  //   border: solid red 1px;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const UpSideContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
`;
const DownSideContainer = styled.div`
  height: 50%;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Enough = styled.div`
  margin-left: 100px;
  font-size: 20px;
  font-weight: 300;
  color: gray;
`;

const ContactUs = styled.div`
  margin-left: 100px;
  color: #369e41;
  font-size: 80px;
  font-weight: 700;
`;

const Info = styled.div`
  color: gray;
  font-size: 20px;
  text-align: left;
  width: 20%;
  line-height: 30px;
  font-weight: 200;
`;

const Highlight = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: white;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <UpSideContainer>
        <Enough>충분히 보셨나요? →</Enough>
        <ContactUs>연락주세요!</ContactUs>
      </UpSideContainer>
      <DownSideContainer>
        <Info>
          가천대학교
          <Highlight>
            <br /> 카카오엔터프라이즈
          </Highlight>
          <br />
          Lucky세븐
        </Info>
        <Info>
          <Highlight>Location :</Highlight>
          <br />
          경기 성남시 수정구 복정동 495, 가천대학교 AI 공학관, 411호
          <br />
        </Info>
        <Info>
          <Highlight>Phone :</Highlight>
          <br />- TL : +82) 10-3673-5717
          <br />- FE : +82) 10-9459-6374
          <br />- BE : +82) 10-9962-4758
        </Info>
        <Info>
          <Highlight>E-MAIL :</Highlight>
          <br /> - hyun1044@gachon.ac.kr
          <br /> - karis6504@gmail.com
          <br /> - dsk08208@gmail.com
        </Info>
      </DownSideContainer>
    </FooterContainer>
  );
}
