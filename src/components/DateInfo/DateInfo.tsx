import styles from './DateInfo.module.css';

export const DateInfo = () => {
  const utcDate = new Date().toUTCString();

  const time = utcDate.slice(-12, -7);

  const date = utcDate.slice(0, 16);

  return (
    <div className={styles.container}>
      <span className={styles.time_wrapper}>
        Current UTC time: 
        &nbsp;
        {time}
      </span>

      <br />

      {date}
    </div>
  );
};
