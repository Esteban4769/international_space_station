import { PersonIcon } from '../PersonIcon/PersonIcon';
import styles from './Person.module.css';

interface Props {
  name: string;
}

export const Person: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.person_wrapper}>
      <PersonIcon />
      {name}
    </div>
  )
};
