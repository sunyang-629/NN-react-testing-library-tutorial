import React from "react";
import "./follower-list.css";
import axios from "axios";
import { Link } from "react-router-dom";

type FollowerType = {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
};

const FollowersList: React.FC = () => {
  const [followers, setFollowers] = React.useState<FollowerType[]>([]);

  React.useEffect(() => {
    const fetchFollowers = async () => {
      const { data } = await axios.get<{ results: FollowerType[] }>(
        "https://randomuser.me/api/?results=5"
      );
      setFollowers(data.results);
    };

    fetchFollowers();
  }, []);
  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower, index) => (
          <div
            className="follower-item"
            data-testid={`follower-item-${index}`}
            key={index}
          >
            <img src={follower.picture.large} />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default FollowersList;
