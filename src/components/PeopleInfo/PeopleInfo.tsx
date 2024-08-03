import { useAppSelector } from "../../utils/reduxHooks";
import { Person } from "../Person";
import styles from './PeopleInfo.module.css';

export const PeopleInfo = () => {
  const { people } = useAppSelector(state => state);

  return (
    <div className={styles.container}>
      <div className={styles.people_wrapper}>
        {people.data && (people.data.map(({ name }) => (
          <Person name={name} />
        )))}
      </div>
      
      <div className={styles.amount_wrapper}>
        Total amount:
        &nbsp;
        {people.data?.length}
        &nbsp;
        people on ISS
      </div>
    </div>
  );
};