import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.userInfo}>
        <img src={image} alt="User avatar" className={css.img} />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.text}>Followers </span>
          <span className={css.numbers}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Views </span>
          <span className={css.numbers}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Likes </span>
          <span className={css.numbers}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
