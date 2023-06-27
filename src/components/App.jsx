import React from 'react';
import { Profile } from '../components/Profile/Profile'
import user from '../components/Profile/user.json'
import { StaticsSection } from './Statistics/StaticsSection'
import { FriendList } from './FriendList/FriendList'
import friend from './FriendList/friend.json'



export const App = () => {
  return (
    <React.StrictMode >
      <div> <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      /></div>
      <section>
        <StaticsSection
         />
        </section>
      <FriendList
        id={friend.id}
        name={friend.name}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
      />
  </React.StrictMode>
  )
};
export default App