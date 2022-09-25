import config from 'config';

const { serverAddress } = config;
const collectionName = 'title';

const fetchMany = async (): Promise<Omit<Diet[], 'id'>> => {
  const response = await fetch(`${serverAddress}/${collectionName}`);
  const fetchedTitle = await response.json();

  return fetchedTitle as Recipe[];
};

const SearchService = {
  fetchMany,
};

export default SearchService;
