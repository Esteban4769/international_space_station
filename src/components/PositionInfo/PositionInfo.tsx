import styles from './PositionInfo.module.css';

interface Props {
  longitude: number,
  latitude: number,
}

export const PositionInfo: React.FC<Props> = ({ latitude, longitude }) => {
  return (
    <div className={styles.container}>
      ISS is now located at:
      <br />
      &nbsp;
      <i>
        longitude: {latitude.toFixed(2)},
        latitude: {longitude.toFixed(2)}
      </i>
    </div>
  );
};