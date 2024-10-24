import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendlist}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className={css.frienditem}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};
