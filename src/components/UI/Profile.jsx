import styled from "styled-components";

const ProfileContainer = styled.div`
  //   border: solid red 1px;
  width: 230px;
  height: 250px;
  display: flex;
  flex-flow: column;
  justify-content: center;
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
`;

const Disc = styled.div`
  //   border: solid red 1px;
  font-size: 16px;
  font-weight: 300;
  color: gray;
  margin-top: 5px;
`;

export default function Profile(props) {
  console.log("Profile");
  console.log(props.profile);
  return (
    <ProfileContainer
      onClick={() => {
        props.setProfileCardInfo(props.profile);
        props.setShowProfileCard(true);
      }}
    >
      <Image src={props.profile.src} alt="profileImg" />
      <Name>{props.profile.name}</Name>
      <Disc>
        {props.profile.leader && "Leader "}
        {props.profile.tl && "Team Leader "}
      </Disc>
      <Disc>{props.profile.major}</Disc>
    </ProfileContainer>
  );
}
