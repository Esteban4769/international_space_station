import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import styles from "./PositionMap.module.css";

const API_KEY = "AIzaSyDj-Sas_opZb1LXxVULHwmROjFAev6PYcc";

interface Props {
  latitude: number;
  longitude: number;
}

export const PositionMap: React.FC<Props> = ({ latitude, longitude }) => {
  const [lat, lng]  = [latitude, longitude].map(n => Number(n.toFixed(2)));

  return (
    <div className={styles.container}>
        <APIProvider
          solutionChannel="GMP_devsite_samples_v3_rgmbasicmap"
          apiKey={API_KEY}
        >
          <Map
            defaultZoom={3}
            defaultCenter={{ lat, lng }}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          >
            <Marker 
              position={{ lat, lng }}
            />
          </Map>
        </APIProvider>
    </div>
  );
};
