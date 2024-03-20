import styled from "styled-components";

const ProfileCardContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 8px;
  border: solid gray 1px;
  padding: 25px;
  display: flex;
  width: auto;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
`;

const Image = styled.img`
  //   border: solid red 1px;
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const Name = styled.div`
  //   border: solid red 1px;
  font-size: 26px;
  font-weight: 600;
`;
const SubDisc = styled.div`
  //   border: solid red 1px;
  font-size: 16px;
  font-weight: 300;
  color: gray;
`;

const Disc = styled.div`
  //   border: solid red 1px;
  font-size: 16px;
  font-weight: 300;
  color: gray;
  text-align: left;
`;

const Title = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 800;
  margin: 10px 0px 5px 0px;
  padding: 0;
  text-align: left;
`;

const ProfileArea = styled.div`
  padding: 25px;
`;
const DiscArea = styled.div`
  padding: 25px;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  border: solid red 1px;
  background-color: red;
  border-radius: 25px;
`;

export default function ProfileCard(props) {
  console.log("ProfileCard");
  console.log(props);

  return (
    <ProfileCardContainer>
      <ProfileArea>
        <Image src={props.profileCardInfo.src} alt="profileImg" />
        <Name>{props.profileCardInfo.name}</Name>
        <SubDisc>{props.profileCardInfo.major}</SubDisc>
        <SubDisc>
          {props.profileCardInfo.part}
          {props.profileCardInfo.leader && " / Leader "}
          {props.profileCardInfo.tl && " / Team Leader "}
        </SubDisc>
      </ProfileArea>
      <DiscArea>
        <Title>About Me</Title>
        <Disc>- {props.profileCardInfo.aboutMe}</Disc>
        <Title>GitHub</Title>
        <Disc>- {props.profileCardInfo.github}</Disc>
        <Title>Instagram</Title>
        <Disc>- {props.profileCardInfo.insta}</Disc>
        <Title>Email</Title>
        <Disc>- {props.profileCardInfo.email}</Disc>
      </DiscArea>
      <CloseButtonContainer
        onClick={() => {
          props.setShowProfileCard(false);
        }}
      />
    </ProfileCardContainer>
  );
}
