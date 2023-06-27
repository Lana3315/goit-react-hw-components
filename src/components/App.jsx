import React from 'react';
import { Profile } from '../components/Profile/Profile'
import user from '../components/Profile/user.json'
import {StaticsSection} from './Statistics/StaticsSection'


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
      
  </React.StrictMode>
  )
};
export default App