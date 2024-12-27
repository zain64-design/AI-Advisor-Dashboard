import axios from 'axios';

const useFetchAPI = async (url,params) => {
  
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      throw new Error(errorMessage || 'Something went wrong!');
    }
}

export default useFetchAPI;