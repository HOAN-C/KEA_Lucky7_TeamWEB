import "./App.css";
import Layout from "./components/Layout/Layout";
import Introduction from "./pages/Introduction";
import Member from "./pages/Member";
import Symbol from "./pages/Symbol";
import Footer from "./pages/Footer";
import styled from "styled-components";

let profiles = [
  [
    //Front-End
    {
      src: "/image/profile/최정환.png",
      name: "최정환",
      major: "컴퓨터공학과",
      part: "Front-End",
      leader: true,
      github: "HOAN-C",
      insta: "hoan.c9907",
      email: "hoan.c9907@gmail.com",
      aboutMe: "느려도 꾸준히",
    },
    {
      src: "/image/profile/이다현.jpeg",
      name: "이다현",
      major: "소프트웨어공학과",
      part: "Front-End",
      leader: false,
      github: "jrary",
      insta: "clgleeahn",
      email: "jrary@gachon.ac.kr",
      aboutMe: "아침에 상쾌한 기분으로 일찍 일어나는 사람은 드물다.",
    },
    {
      src: "/image/profile/김성섭.png",
      name: "김성섭",
      major: "컴퓨터공학과",
      part: "Front-End",
      leader: false,
      github: "jodandan",
      insta: "s__bluelife",
      email: "wdd789q@gachon.ac.kr",
      aboutMe: "진인사대천명",
    },
  ],
  [
    //Back-End
    {
      src: "/image/profile/강동석.jpeg",
      name: "강동석",
      major: "소프트웨어공학과",
      part: "Back-End",
      leader: true,
      github: "wcorn",
      insta: "",
      email: "dsk08208@gmail.com",
      aboutMe: "나 강동석인데 우주먼지다.",
    },
    {
      src: "/image/profile/이현석.jpeg",
      name: "이현석",
      major: "소프트웨어공학과",
      part: "Back-End",
      leader: false,
      tl: true,
      github: "Hyunstone",
      insta: "hyunsseekkk",
      email: "hyun1044@gachon.ac.kr",
      aboutMe: "이것도 다 추억이다.",
    },
    {
      src: "/image/profile/심서현.jpeg",
      name: "심서현",
      major: "인공지능학과",
      part: "Back-End",
      leader: false,
      github: "SeohyunSim8",
      insta: "ovo_sh_",
      email: "angelsh0805@gachon.ac.kr",
      aboutMe: "꾸준히 나아가는 중!",
    },
    {
      src: "/image/profile/정조은.jpeg",
      name: "정조은",
      major: "소프트웨어공학과",
      part: "Back-End",
      leader: false,
      github: "HOAN-C",
      insta: "hoan.c9907",
      email: "hoan.c9907@gmail.com",
      aboutMe: "대부분의 사람들은 그냥 일찍 일어날 뿐이다.",
    },
  ],
];

const ScrollSnapWrap = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;

const SnapDiv = styled.div`
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-size: 100px;
`;

function App() {
  return (
    <Layout>
      <ScrollSnapWrap>
        <SnapDiv>
          <Introduction />
        </SnapDiv>
        <SnapDiv>
          <Symbol />
        </SnapDiv>
        <SnapDiv>
          <Member profiles={profiles} />
        </SnapDiv>
        <SnapDiv>
          <Footer />
        </SnapDiv>
      </ScrollSnapWrap>
    </Layout>
  );
}

export default App;
