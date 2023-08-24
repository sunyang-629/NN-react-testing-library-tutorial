import React from "react";
import { Container } from "react-bootstrap";
import Follower from "../../components/follower/follower";

const FollowersPage: React.FC = () => {
  return (
    <div>
      <Container>
        <Follower />
      </Container>
    </div>
  );
};

export default FollowersPage;
