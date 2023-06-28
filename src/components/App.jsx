import React from 'react';
import user from '../components/Profile/user.json'
import {Profile}  from './Profile/Profile'
import  StaticsSection  from './Statistics/StaticsSection'
import data from './Statistics/data.json'
import  FriendList  from './FriendList/FriendList'
import firends from '../components/FriendList/friends.json'
import  TransactionHistory  from '../components/TransactionHistory/TransactionHistory.jsx'
import transactions from './TransactionHistory/transactions.json'



export const App = () =>{
  return (
    <React.StrictMode>
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <StaticsSection title="UPLOAD STATS" stats={data}
      />
      <FriendList
        friends = {firends}
      />
      <TransactionHistory items={transactions}
      />
      </div>
     </React.StrictMode>
  );
};

export default App