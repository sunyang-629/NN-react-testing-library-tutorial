import React from "react";
import Header from "../header";
import FollowersList from "../follower-list";

const Follower: React.FC = () => {
  return (
    <div className="followers">
      <Header title="Followers" />
      <FollowersList />
    </div>
  );
};

export default Follower;
