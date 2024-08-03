import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./utils/reduxHooks";
import * as peopleActions from "./features/people";
import * as positionActions from "./features/position";
import styles from "./App.module.css";
import { PositionMap } from "./components/PositionMap";
import { PeopleInfo } from "./components/PeopleInfo";
import { DateInfo } from "./components/DateInfo";
import { PositionInfo } from "./components/PositionInfo";
import ReactLoading from "react-loading";

function App() {
  const dispatch = useAppDispatch();
  const { position, people } = useAppSelector((state) => state);

  const latitude = position.data?.iss_position?.latitude ?? "0";
  const longitude = position.data?.iss_position?.longitude ?? "0"

  const loadInfo = async () => {
     await dispatch(peopleActions.fetchData());
     await dispatch(positionActions.fetchData());
  };

  useEffect(() => {
    loadInfo();

    const fetchInterwal = setInterval(loadInfo, 5000);

    return () => {
      clearInterval(fetchInterwal);
    };
  }, []);

  return (
    <div className={styles.container}>
      {(position.loading || people.loading) 
        && (!position.data && !people.data) 
        &&
        (<div className={styles.loader_wrapper}>
          <ReactLoading type={'spin'} color={'#2c3e50'} height={240} width={240} />
        </div>)
      }

      {position.data && people.data && (
        <>
          <div className={styles.wrapper}>
            <PositionInfo latitude={latitude} longitude={longitude} />

            <DateInfo />
          </div>

          <div className={styles.wrapper}>
            <PositionMap latitude={latitude} longitude={longitude} />

            <PeopleInfo />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
