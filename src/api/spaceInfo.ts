import { ISSPosition } from "../types/ISSPosition";
import { SpacePeople } from "../types/SpacePeople";
import { client } from "../utils/fetchClient";

export const getPeople = () => {
  return client.get<SpacePeople>('https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json');
};

export const getISSPosition = () => {
  return client.get<ISSPosition>('https://api.wheretheiss.at/v1/satellites/25544');
};
