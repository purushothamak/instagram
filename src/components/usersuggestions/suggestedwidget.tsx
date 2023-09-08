import "./suggestedwidget.css";
import { useState, useEffect } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    thumbnail: string;
  };
}

function SuggestedUser({ user }: { user: User }) {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowClick = () => {
    setIsFollowed(!isFollowed);
  };
  return (
    <div className="user-card">
      <img
        className="user-picture"
        src={user.picture.thumbnail}
        alt={user.name.first}
      />
      <div className="user-info">
        <h4 className="suggested-h4">{`${user.name.first} ${user.name.last}`}</h4>
        <p>{user.email}</p>
      </div>
      <div className="user-follow">
        <h3 onClick={handleFollowClick}>
          {isFollowed ? "Following" : "Follow"}
        </h3>
      </div>
    </div>
  );
}

function SuggestedUsers() {
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();
        setSuggestedUsers(data.results);
      } catch (error) {
        console.error("Error fetching suggested user:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="suggested-users">
      <div className="suggested-heading">
        <h3 className="suggested-h3">Suggested for you</h3>
        <h3>See All</h3>
      </div>
      {suggestedUsers.map((user, index) => (
        <SuggestedUser key={index} user={user} />
      ))}
    </div>
  );
}

export default SuggestedUsers;
