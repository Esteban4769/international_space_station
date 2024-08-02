import { getPeople } from "../api/spaceInfo";

export const getISSPeople = async () => {
  const allPeople = await getPeople();

  return allPeople.people.filter(({ craft }) => craft === 'ISS');
};
