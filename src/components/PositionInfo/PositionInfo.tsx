import { normalizeData } from '../../utils/normalizeData';
import styles from './PositionInfo.module.css';

interface Props {
  longitude: string,
  latitude: string,
}

export const PositionInfo: React.FC<Props> = ({ latitude, longitude }) => {
  const {lat, lng} = normalizeData({ latitude, longitude });

  return (
    <div className={styles.container}>
      ISS is now located at:
      <br />
      &nbsp;
      <i>
        longitude: {lng},
        latitude: {lat}
      </i>
    </div>
  );
};