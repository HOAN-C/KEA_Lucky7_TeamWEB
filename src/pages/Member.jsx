import styled from "styled-components";
import Profile from "../components/UI/Profile";
import ProfileCard from "../components/UI/ProfileCard";
import { useState } from "react";

const MemberContainer = styled.div`
  //   border: solid red 1px;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Highlight = styled.div`
  text-align: left;
  margin-left: 15px;
  font-weight: bold;
  font-size: 30px;
  color: black;
`;

const PartContainer = styled.div`
  width: 80%;
  //   border: solid red 1px;
  margin: 15px;
  font-weight: bold;
  font-size: 30px;
  color: black;
`;
const ProfileListContainer = styled.div`
  //   border: solid red 1px;
  display: flex;
  justify-content: space-evenly;
`;

export default function Member(props) {
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [profileCardInfo, setProfileCardInfo] = useState(props.profiles[0][0]);

  return showProfileCard ? (
    <ProfileCard
      profileCardInfo={profileCardInfo}
      setShowProfileCard={setShowProfileCard}
    />
  ) : (
    <MemberContainer>
      <PartContainer>
        <Highlight>#Front-End</Highlight>
        <ProfileListContainer>
          {props.profiles[0].map((profile, i) => (
            <Profile
              profile={profile}
              key={i}
              setProfileCardInfo={setProfileCardInfo}
              setShowProfileCard={setShowProfileCard}
            />
          ))}
        </ProfileListContainer>
      </PartContainer>
      <PartContainer>
        <Highlight>#Back-End</Highlight>
        <ProfileListContainer>
          {props.profiles[1].map((profile, i) => (
            <Profile
              profile={profile}
              key={i}
              setProfileCardInfo={setProfileCardInfo}
              setShowProfileCard={setShowProfileCard}
            />
          ))}
        </ProfileListContainer>
      </PartContainer>
    </MemberContainer>
  );
}
