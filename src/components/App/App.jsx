import userData from '../../userData.json';
import friends from '../../friends.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import css from './App.module.css';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}
