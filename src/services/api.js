import axios from 'axios';

axios.defaults.baseURL = 'https://instasport.co/dashboard/api/v1/clubs/';

const getAllClubs = async () => {
  const data = await axios.get();
  return data;
};

export default getAllClubs;
