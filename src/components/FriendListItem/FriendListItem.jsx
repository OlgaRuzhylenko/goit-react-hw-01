import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const textColor = clsx(isOnline ? css.isOnline : css.isOffline);
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={textColor}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
