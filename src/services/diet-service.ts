import config from 'config';

const { serverAddress } = config;
const collectionName = 'diet';

const fetchMany = async (): Promise<Diet[]> => {
  const response = await fetch(`${serverAddress}/${collectionName}`);
  const fetchedDiet = await response.json();

  return fetchedDiet as Recipe[];
};

const DietService = {
  fetchMany,
};

export default DietService;
