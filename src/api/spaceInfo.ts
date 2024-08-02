import { SpacePeople } from "../types/SpacePeople";
import { client } from "../utils/fetchClient";

const URL = 'http://api.open-notify.org';

export const getPeople = () => {
  return client.get<SpacePeople>(URL+'/astros.json');
};

export const getISSPosition = () => {
  return client.get<SpacePeople>(URL+'/iss-now.json');
};
