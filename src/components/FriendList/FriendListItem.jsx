import PropTypes from 'prop-types'
import css from './FriendList.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item} >
      <span className={css.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" style={{ width: 48 }} />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isOnline: PropTypes.number.isRequired,
};


